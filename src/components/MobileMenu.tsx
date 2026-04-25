"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Link as NavLink } from "@/content/types";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";

type Props = {
  nav: NavLink[];
  cta: NavLink;
  brand: { name: string; tagline: string };
  photo: { src: string; alt: string };
  location?: string;
};

export function MobileMenu({ nav, cta, brand, photo, location }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="-mr-1 inline-flex items-center justify-center lg:hidden"
      >
        <Image src="/menu-icon.svg" alt="" width={24} height={24} />
      </button>

      {mounted &&
        open &&
        createPortal(
          <MobileMenuDrawer
            open={open}
            onClose={() => setOpen(false)}
            nav={nav}
            cta={cta}
            brand={brand}
            photo={photo}
            location={location}
          />,
          document.body,
        )}
    </>
  );
}

type DrawerProps = {
  open: boolean;
  onClose: () => void;
} & Pick<Props, "nav" | "cta" | "brand" | "photo" | "location">;

function MobileMenuDrawer({
  open,
  onClose,
  nav,
  cta,
  brand,
  photo,
  location,
}: DrawerProps) {
  const stagger = (ms: number) =>
    ({
      transitionDelay: open ? `${ms}ms` : "0ms",
    }) as const;

  return (
    <>
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[100] min-h-dvh overflow-hidden lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={onClose}
          className={`absolute inset-0 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`paper-grain absolute inset-0 flex min-h-dvh w-screen flex-col overflow-hidden bg-[#f6f1e7] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,0.68,0.2,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div aria-hidden className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full bg-sage-soft/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[#ede2cc]/70 blur-3xl" />

          <div className="relative flex items-center justify-between px-6 pt-6 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-engravers text-[18px] leading-none text-ink">
                {brand.name}
              </span>
              <span className="h-3 w-px bg-hairline" />
              <span className="font-engravers text-[10px] text-ink-muted">
                {brand.tagline}
              </span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white/70 transition-colors hover:bg-white"
            >
              <span className="relative block h-3 w-3">
                <span className="absolute inset-0 m-auto h-[1.5px] w-3 rotate-45 rounded-full bg-ink transition-transform duration-300 group-hover:rotate-[135deg]" />
                <span className="absolute inset-0 m-auto h-[1.5px] w-3 -rotate-45 rounded-full bg-ink transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </button>
          </div>

          <div
            className={`relative mx-6 mt-3 flex h-[124px] items-stretch overflow-hidden rounded-[20px] border border-hairline bg-[#eef1e6] transition-all duration-[620ms] ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={stagger(140)}
          >
            <div className="relative h-full w-[118px] shrink-0 overflow-hidden bg-gradient-to-b from-[#d6dfca] to-[#b8c8a3]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="118px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1.5 px-5">
              <p className="font-engravers text-xs tracking-[0.3em] text-ink-muted">
                Hi, I&rsquo;m
              </p>
              <p className="font-recoleta text-[34px] italic leading-[0.95] text-ink">
                Lucy.
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-[5px] w-[5px] rounded-full bg-sage-deep"
                />
                <p className="font-engravers text-[9px] tracking-[0.22em] text-ink-muted">
                  PT &amp; Coach &middot; Yorkshire
                </p>
              </div>
            </div>
          </div>

          <nav className="relative mt-5 flex-1 overflow-y-auto px-6">
            <p
              className={`font-engravers mb-2 flex items-center gap-3 text-sm text-ink-muted transition-all duration-500 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              style={stagger(200)}
            >
              <span aria-hidden className="h-px w-6 bg-ink-muted/50" />
              Explore
            </p>
            <ul>
              {nav.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className={`group flex items-baseline gap-5 border-b border-hairline py-[14px] transition-all duration-500 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    style={stagger(240 + i * 55)}
                  >
                    <span className="font-engravers w-6 text-[10px] text-ink-muted transition-colors group-hover:text-sage-deep">
                      0{i + 1}
                    </span>
                    <span className="font-recoleta flex-1 text-[30px] leading-none text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:italic group-hover:text-sage-deep">
                      {item.label}
                    </span>
                    <span className="translate-x-[-4px] text-ink-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-sage-deep">
                      <Icon name="arrow-right" className="h-3 w-3" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`relative px-6 pt-4 pb-7 transition-all duration-500 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={stagger(240 + nav.length * 55 + 80)}
          >
            <Button href={cta.href} size="lg" withArrow fullWidth>
              {cta.label}
            </Button>
            {location && (
              <p className="font-engravers mt-4 text-center text-xs tracking-[0.24em] text-ink-muted">
                {location}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
