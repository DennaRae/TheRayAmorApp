import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black text-neutral-200 px-6 py-10 md:px-16">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-[#D4AF37] mb-8"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#D4AF37] mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-neutral-500 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-300">
          <section>
            <h2 className="text-lg font-medium text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By creating an account with Ray Amor, you agree to be bound by
              these Terms &amp; Conditions and our Privacy Policy. If you do
              not agree, please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">
              2. Account Types
            </h2>
            <p>
              Ray Amor offers Individual, Student, Teacher/Educator, and
              Organization/Partner accounts. Each account type may include
              different features, pricing, and usage limits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">
              3. Avatar Content
            </h2>
            <p>
              Avatars created during onboarding are for personalization
              purposes only and do not represent a real person unless you
              choose to make them so.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-2">
              4. Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of
              the service after changes means you accept the updated terms.
            </p>
          </section>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-12 px-7 py-2.5 rounded-lg font-medium text-black bg-[#D4AF37] hover:opacity-90"
        >
          Back to onboarding
        </button>
      </div>
    </div>
  );
}