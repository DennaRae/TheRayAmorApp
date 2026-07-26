import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StepIndicator from "./StepIndicator";
import AccountTypeStep from "./steps/AccountTypeStep";
import AvatarStep from "./steps/AvatarStep";
import CompleteStep from "./steps/CompleteStep";

// Swap this for your actual mansion/portrait background image.
const BG_IMAGE_URL = "/assets/backgroundimage.png";

const DEFAULT_AVATAR = {
  gender: "female",
  face: "face-1",
  hairstyle: "hair-1",
  outfit: "outfit-1",
  accessory: "earrings",
};

export default function OnboardingFlow() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("individual");
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const goNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
      return;
    }
    // Final step -> send them to the dashboard.
    navigate("/dashboard");
  };

  const skipAvatar = () => setStep(3);

  const isNextDisabled = step === 3 && !agreedToTerms;

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background image — fixed, full-screen, sits behind everything (z-0) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
      />
      {/* Dark overlay so text/cards stay readable over the image */}
      <div className="absolute inset-0 z-10 bg-black/30" />

      {/* Branding — floats above the background */}
      <div className="absolute inset-0 z-20 p-10 pointer-events-none">
        <h1 className="text-2xl font-serif tracking-[0.2em] text-[#D4AF37] mt-1">
          RAY AMOR
        </h1>
        <p className="text-xs tracking-[0.3em] text-neutral-300 mt-1">
          AI MIND ORGANIZING ROUTINE
        </p>
      </div>

      {/* Step process card — highest z-index, floats above the background image */}
      <div className="relative z-30 min-h-screen flex items-center justify-center lg:justify-end p-6 lg:pr-16">
        <div className="w-full max-w-3xl bg-neutral-950/95 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-12">
          <StepIndicator currentStep={step} />

          <div className="mt-10 min-h-[380px]">
            {step === 1 && (
              <AccountTypeStep selected={accountType} onSelect={setAccountType} />
            )}

            {step === 2 && <AvatarStep avatar={avatar} onChange={setAvatar} />}

            {step === 3 && (
              <CompleteStep
                agreedToTerms={agreedToTerms}
                onToggleTerms={setAgreedToTerms}
              />
            )}
          </div>

          <div className="flex items-center justify-between mt-10 pt-6 border-t border-neutral-800">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="px-5 py-2.5 text-sm text-neutral-300 hover:text-white"
                >
                  Back
                </button>
              )}
              {step === 2 && (
                <button
                  type="button"
                  onClick={skipAvatar}
                  className="ml-2 px-5 py-2.5 text-sm text-neutral-300 border border-neutral-700 rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  Skip for now
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={isNextDisabled}
              className={[
                "flex items-center gap-2 px-7 py-2.5 rounded-lg font-medium text-black transition-opacity",
                "bg-[#D4AF37]",
                isNextDisabled ? "opacity-40 cursor-not-allowed" : "hover:opacity-90",
              ].join(" ")}
            >
              {step === 3 ? "Go to Dashboard" : "Continue"}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}