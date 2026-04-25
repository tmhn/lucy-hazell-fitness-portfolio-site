"use server";

export type EnquirePayload = {
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

export type EnquireResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitEnquiry(
  payload: EnquirePayload,
): Promise<EnquireResult> {
  // Honeypot — silently succeed without storing the submission.
  if (payload.honeypot.trim().length > 0) {
    return { ok: true };
  }

  // TODO: write to Sanity (`enquiry` doc) and notify Lucy via email.
  // Mocked for now so the UI flow can be exercised end-to-end.
  await new Promise((resolve) => setTimeout(resolve, 800));

  return { ok: true };
}
