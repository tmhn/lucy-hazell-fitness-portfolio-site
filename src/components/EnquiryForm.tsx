"use client";

import Link from "next/link";
import { useMemo, useState, useTransition } from "react";

import type { EnquireContent } from "@/content/types";
import {
  submitEnquiry,
  type EnquirePayload,
} from "@/app/(site)/enquire/actions";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { RadioCard } from "@/components/ui/RadioCard";

type FormState = {
  goal: string;
  priorities: string[];
  activityLevel: string;
  name: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "either";
  notes: string;
  honeypot: string;
};

const initialState: FormState = {
  goal: "",
  priorities: [],
  activityLevel: "",
  name: "",
  email: "",
  phone: "",
  preferredContact: "email",
  notes: "",
  honeypot: "",
};

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

type Props = { form: EnquireContent["form"] };

export function EnquiryForm({ form }: Props) {
  const [state, setState] = useState<FormState>(initialState);
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, startTransition] = useTransition();
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const totalSteps = form.steps.length;
  const step = form.steps[stepIndex];
  const isLast = stepIndex === totalSteps - 1;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setState((prev) => ({ ...prev, [key]: value }));

  const touch = (field: string) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const togglePriority = (key: string) =>
    setState((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(key)
        ? prev.priorities.filter((k) => k !== key)
        : [...prev.priorities, key],
    }));

  const stepValid = useMemo(() => {
    if (step.kind === "single") {
      return state[step.field].length > 0;
    }
    if (step.kind === "multi") {
      return state.priorities.length > 0;
    }
    return state.name.trim().length > 1 && isEmail(state.email);
  }, [step, state]);

  const goNext = () => {
    if (!stepValid) return;
    setDirection("forward");
    setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
  };

  const goBack = () => {
    setDirection("back");
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const submit = () => {
    if (!stepValid) return;
    const payload: EnquirePayload = { ...state };
    startTransition(async () => {
      const result = await submitEnquiry(payload);
      setStatus(result.ok ? "success" : "error");
    });
  };

  if (status === "success") {
    return (
      <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-10 sm:p-14">
        <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-deep text-white">
            <Icon name="check" className="h-6 w-6" />
          </span>
          <Eyebrow align="center">{form.success.eyebrow}</Eyebrow>
          <h2 className="font-recoleta text-[32px] leading-[1.1] text-ink sm:text-[40px]">
            {form.success.title}
          </h2>
          <p className="max-w-md text-[16px] leading-[1.7] text-ink-soft">
            {form.success.description}
          </p>
          <Link
            href="/"
            className="btn-label btn-ghost inline-flex items-center gap-3 rounded-full border border-ink/15 bg-white/70 px-7 py-4 text-[11px] text-ink"
          >
            {form.success.followUpLabel}
            <Icon name="arrow-right" className="h-3 w-3" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="paper-grain relative overflow-hidden rounded-[36px] bg-[#f0ebde] p-8 sm:p-12 lg:p-14">
      <div className="relative space-y-10">
        {/* Progress dots — pinned, animate themselves */}
        <div
          className="flex items-center justify-end gap-2 transition-all"
          aria-hidden
        >
          {form.steps.map((_, i) => (
            <span
              key={i}
              className={[
                "h-1.5 rounded-full transition-all duration-500",
                i === stepIndex
                  ? "w-8 bg-sage-deep"
                  : i < stepIndex
                    ? "w-4 bg-sage-deep/60"
                    : "w-4 bg-ink/15",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Animated step block — header text + body slide together */}
        <div
          key={stepIndex}
          className={
            direction === "forward" ? "step-enter-forward" : "step-enter-back"
          }
        >
          <div className="space-y-3">
            <Eyebrow>{step.eyebrow}</Eyebrow>
            <h2 className="font-recoleta text-[28px] leading-[1.1] text-ink sm:text-[34px]">
              {step.title}
            </h2>
            <p className="max-w-lg text-[15px] leading-[1.6] text-ink-soft">
              {step.prompt}
            </p>
          </div>

          <div className="mt-10">
          {step.kind === "single" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {step.options.map((option) => (
                <RadioCard
                  key={option.key}
                  name={`enquiry-${step.field}`}
                  type="radio"
                  value={option.key}
                  checked={state[step.field] === option.key}
                  onChange={(v) => update(step.field, v)}
                  icon={option.icon}
                  title={option.title}
                  description={option.description}
                />
              ))}
            </div>
          )}

          {step.kind === "multi" && (
            <div className="space-y-4">
              <p className="font-engravers text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                {step.helper}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {step.options.map((option) => (
                  <RadioCard
                    key={option.key}
                    name={`enquiry-priorities-${option.key}`}
                    type="checkbox"
                    value={option.key}
                    checked={state.priorities.includes(option.key)}
                    onChange={togglePriority}
                    icon={option.icon}
                    title={option.title}
                    description={option.description}
                  />
                ))}
              </div>
            </div>
          )}

          {step.kind === "details" && (
            <div className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  required
                  error={
                    touched.name && state.name.trim().length < 2
                      ? "Please share your name."
                      : undefined
                  }
                >
                  <input
                    type="text"
                    autoComplete="name"
                    value={state.name}
                    onChange={(e) => update("name", e.target.value)}
                    onBlur={() => touch("name")}
                    className="form-input"
                  />
                </Field>
                <Field
                  label="Email"
                  required
                  error={
                    touched.email && !isEmail(state.email)
                      ? "A valid email so Lucy can reply."
                      : undefined
                  }
                >
                  <input
                    type="email"
                    autoComplete="email"
                    value={state.email}
                    onChange={(e) => update("email", e.target.value)}
                    onBlur={() => touch("email")}
                    className="form-input"
                  />
                </Field>
                <Field label="Phone (optional)">
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={state.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="form-input"
                  />
                </Field>
                <Field label="Preferred contact">
                  <div className="flex flex-wrap gap-2">
                    {step.contactMethods.map((method) => {
                      const active = state.preferredContact === method.key;
                      return (
                        <button
                          key={method.key}
                          type="button"
                          onClick={() =>
                            update("preferredContact", method.key)
                          }
                          className={[
                            "rounded-full border px-4 py-2 text-[12px] transition-all",
                            active
                              ? "border-sage-deep bg-sage-deep text-white"
                              : "border-ink/15 bg-white text-ink-soft hover:border-ink/30 hover:text-ink",
                          ].join(" ")}
                        >
                          {method.label}
                        </button>
                      );
                    })}
                  </div>
                </Field>
              </div>

              <Field label="Anything else you'd like Lucy to know?">
                <textarea
                  rows={4}
                  value={state.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="form-input resize-none"
                />
              </Field>

              {/* honeypot — bots fill, humans don't see */}
              <label className="absolute left-[-9999px]" aria-hidden>
                Company
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={state.honeypot}
                  onChange={(e) => update("honeypot", e.target.value)}
                />
              </label>
            </div>
          )}
          </div>
        </div>

        {status === "error" && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-rose-700">
            <p className="font-recoleta text-[18px] leading-tight">
              {form.error.title}
            </p>
            <p className="mt-1 text-[13px] leading-[1.55]">
              {form.error.description}
            </p>
          </div>
        )}

        {/* Footer controls */}
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0 || pending}
            className={[
              "btn-label inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[11px] transition",
              stepIndex === 0
                ? "cursor-not-allowed text-ink/30"
                : "cursor-pointer text-ink-soft hover:text-ink",
            ].join(" ")}
          >
            <Icon name="arrow-right" className="h-3 w-3 rotate-180" />
            {form.backLabel}
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={submit}
              disabled={!stepValid || pending}
              className={[
                "btn-label btn-primary inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-[11px] text-white sm:w-auto",
                stepValid && !pending
                  ? "cursor-pointer bg-sage-deep"
                  : "cursor-not-allowed bg-sage-deep/35 shadow-none",
                pending ? "cursor-wait" : "",
              ].join(" ")}
            >
              {pending ? form.submittingLabel : form.submitLabel}
              {!pending && <Icon name="arrow-right" className="h-3 w-3" />}
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              disabled={!stepValid}
              className={[
                "btn-label btn-primary inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-[11px] text-white sm:w-auto",
                stepValid
                  ? "cursor-pointer bg-sage-deep"
                  : "cursor-not-allowed bg-sage-deep/35 shadow-none",
              ].join(" ")}
            >
              {form.nextLabel}
              <Icon name="arrow-right" className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-engravers text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        {label}
        {required && <span className="ml-1 text-sage-deep">*</span>}
      </span>
      {children}
      {error && <span className="text-[12px] text-rose-700">{error}</span>}
    </label>
  );
}
