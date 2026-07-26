import React from "react";
import { PartyPopper } from "lucide-react";

export default function CompleteStep({ agreedToTerms, onToggleTerms }) {
  return (
    <div className="flex flex-col items-center text-center py-6">
      <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center mb-6">
        <PartyPopper size={28} className="text-[#D4AF37]" />
      </div>

      <h1 className="text-3xl font-semibold text-[#D4AF37]">You're all set!</h1>
      <p className="text-neutral-400 mt-2 max-w-md">
        Your Ray Amor account is ready. Review our terms before you head to your
        dashboard.
      </p>

      <label className="flex items-start gap-3 mt-8 max-w-md text-left text-sm text-neutral-300">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => onToggleTerms(e.target.checked)}
          className="mt-0.5 accent-[#D4AF37] w-4 h-4"
        />
        <span>
          I agree to the{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noreferrer"
            className="text-[#D4AF37] underline underline-offset-2"
          >
            Terms &amp; Conditions
          </a>{" "}
          and Privacy Policy.
        </span>
      </label>
    </div>
  );
}