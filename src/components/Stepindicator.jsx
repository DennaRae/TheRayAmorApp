import React from "react";
import { Check } from "lucide-react";

/**
 * Gold-themed step indicator: Account Type -> Avatar (Optional) -> Complete
 * currentStep: 1 | 2 | 3
 */
const STEPS = [
  // { id: 1, title: "Account Type", subtitle: "Choose your role" },
  { id: 1, title: "Avatar (Optional)", subtitle: "Create your avatar" },
  { id: 2, title: "Complete", subtitle: "You're all set!" },
];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center w-full">
      {STEPS.map((step, idx) => {
        const isDone = step.id < currentStep;
        const isActive = step.id === currentStep;

        return (
          <React.Fragment key={step.id}>
            <div className="flex items-center gap-3">
              <div
                className={[
                  "flex items-center justify-center w-9 h-9 rounded-full border shrink-0 transition-colors",
                  isDone
                    ? "bg-[#D4AF37] border-[#D4AF37] text-black"
                    : isActive
                    ? "bg-[#D4AF37] border-[#D4AF37] text-black font-semibold"
                    : "bg-transparent border-neutral-600 text-neutral-400",
                ].join(" ")}
              >
                {isDone ? <Check size={18} strokeWidth={3} /> : step.id}
              </div>
              <div className="hidden sm:block leading-tight">
                <p
                  className={[
                    "text-sm font-medium",
                    isActive || isDone ? "text-[#D4AF37]" : "text-neutral-300",
                  ].join(" ")}
                >
                  {step.title}
                </p>
                <p className="text-xs text-neutral-500">{step.subtitle}</p>
              </div>
            </div>

            {idx < STEPS.length - 1 && (
              <div
                className={[
                  "flex-1 h-px mx-4",
                  step.id < currentStep ? "bg-[#D4AF37]" : "bg-neutral-700",
                ].join(" ")}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}