"use client";

import { useState } from "react";

import { siteCopy } from "@/lib/site-data";
import type { InquiryMode, Locale } from "@/lib/site-types";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  mode: InquiryMode;
  requestType: "booking" | "general" | "events" | "press";
  title: string;
  intro: string;
  hideIntro?: boolean;
};

type Status =
  | { state: "idle"; message: string }
  | { state: "loading"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ReservationForm({
  locale,
  mode,
  requestType,
  title,
  intro,
  hideIntro,
}: Props) {
  const copy = siteCopy.forms[locale];
  const [status, setStatus] = useState<Status>({ state: "idle", message: "" });
  const today = new Date().toISOString().slice(0, 10);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    setStatus({ state: "loading", message: copy.loading });

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          locale,
          mode,
          requestType,
          source_path: typeof window !== "undefined" ? window.location.pathname : null,
        }),
      });

      const result = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !result.ok) {
        setStatus({ state: "error", message: result.error ?? copy.error });
        return;
      }

      form.reset();
      setStatus({ state: "success", message: copy.success });
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : copy.error,
      });
    }
  }

  return (
    <div className="form-shell">
      {!hideIntro && (
        <div className="section-intro">
          <h2 className="section-title">{title}</h2>
          <p className="section-copy">{intro}</p>
        </div>
      )}

      <form className="form-grid" onSubmit={handleSubmit}>
        <input className="honeypot" name="honeypot" tabIndex={-1} type="text" autoComplete="off" />

        <label className="form-field">
          <span>{copy.name}</span>
          <input className="form-input" name="name" required type="text" />
        </label>

        <label className="form-field">
          <span>{copy.email}</span>
          <input className="form-input" name="email" required type="email" />
        </label>

        {mode === "reservation" ? (
          <>
            <label className="form-field">
              <span>{copy.phone}</span>
              <input className="form-input" name="phone" required type="tel" />
            </label>
            <label className="form-field">
              <span>{copy.guests}</span>
              <input
                className="form-input"
                name="guests"
                required
                type="number"
                min={1}
                max={20}
                defaultValue="2"
              />
            </label>
            <label className="form-field">
              <span>{copy.date}</span>
              <input className="form-input" name="date" required type="date" min={today} />
            </label>
            <label className="form-field">
              <span>{copy.time}</span>
              <input className="form-input" name="time" type="time" placeholder="Es. 20:00" />
            </label>
            <label className="form-field form-field-full">
              <span>{copy.specialRequests}</span>
              <textarea className="form-textarea" name="specialRequests" rows={3} />
            </label>
          </>
        ) : (
          <>
            <label className="form-field">
              <span>{copy.phone}</span>
              <input className="form-input" name="phone" type="tel" />
            </label>
            <label className="form-field">
              <span>{copy.subject}</span>
              <input className="form-input" name="subject" required type="text" />
            </label>
            <label className="form-field form-field-full">
              <span>{copy.message}</span>
              <textarea className="form-textarea" name="message" required rows={4} />
            </label>
          </>
        )}

        <div className="form-field-full form-actions">
          <button
            className="button button-primary"
            disabled={status.state === "loading"}
            type="submit"
          >
            {mode === "reservation" ? copy.submitReservation : copy.submitContact}
          </button>
        </div>
      </form>

      <p
        className={cn(
          "form-status",
          status.state === "success" && "form-status-success",
          status.state === "error" && "form-status-error"
        )}
      >
        {status.state === "idle" ? copy.note : status.message}
      </p>
    </div>
  );
}
