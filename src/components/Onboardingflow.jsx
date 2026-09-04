import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StepIndicator from "./Stepindicator";
import AccountTypeStep from "./steps/Accounttypestep";
import AvatarStep from "./steps/Avatarstep";
import CompleteStep from "./steps/Completestep";

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
    if (step < 2) {
      setStep((s) => s + 1);
      return;
    }
    // Final step -> send them to the dashboard.
    navigate("/luxury");
  };

  const skipAvatar = () => setStep(2);

  const isNextDisabled = step === 2 && !agreedToTerms;

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center
     justify-center p-4 sm:p-8 lg:p-12 text-white"
    style={{
      background:
        "linear-gradient(160deg, #33291a 0%, #1c160d 45%, #0a0806 100%)",
    }}>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 z-10 bg-black/30" />
 <div className="relative z-30 min-h-screen flex items-center justify-center
       lg:justify-end p-6 lg:pr-2">
        <div className="w-full max-w-3xl bg-neutral-950/95 backdrop-blur-sm border border-neutral-800
         rounded-2xl p-6 md:p-8">
          <StepIndicator currentStep={step} />

          <div className="mt-6 min-h-[260px]">
            {step === 1 && 
            <AvatarStep avatar={avatar}
             onChange={setAvatar} />}
            {step === 2 && (
              <CompleteStep
                agreedToTerms={agreedToTerms}
                onToggleTerms={setAgreedToTerms}
              />
            )}
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 
          border-t border-neutral-800">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="px-5 py-2 text-sm text-neutral-300 border border-neutral-700 rounded-lg  hover:text-white"
                >
                  Back
                </button>
              )}
              {step == 1 && (
                <button
                  type="button"
                  onClick={skipAvatar}
                  className=" px-5 py-2 text-sm text-neutral-300 border border-neutral-700 rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37]"
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
                "flex items-center gap-2 px-7 py-2 rounded-lg font-medium text-black transition-opacity",
                "bg-[#D4AF37]",
                isNextDisabled ? "opacity-40 cursor-not-allowed" : "hover:opacity-90",
              ].join(" ")}
            >
              {step === 2 ? "Enter the Room ✦" : "Continue"}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}