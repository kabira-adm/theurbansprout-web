"use client";

import { useState } from "react";

const API_BASE = "https://lively-flow-production-6a1e.up.railway.app";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setState("success");
      setMessage(data.message === "already subscribed" ? "You're already on the list." : "You're in — welcome!");
      setEmail("");
    } catch (err) {
      setState("error");
      setMessage("Couldn't sign you up right now. Try again in a moment.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
        >
          {state === "loading" ? "Signing up…" : "Notify me"}
        </button>
      </form>
      <p className="mt-3 text-xs text-brand-cream/70">
        {message || "Short, seasonal, specific to Indian balconies. Unsubscribe anytime."}
      </p>
    </div>
  );
}
