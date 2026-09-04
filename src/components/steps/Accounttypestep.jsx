import React, { useState } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Check,
  ArrowRight,
  UsersRound,
} from "lucide-react";

export const ACCOUNT_TYPES = [
  {
    id: "individual",
    label: "Individual",
    description: "For personal growth and self development.",
    Icon: User,
  },
  {
    id: "student",
    label: "Student",
    description: "For learners and students.",
    Icon: GraduationCap,
  },
  {
    id: "teacher",
    label: "Teacher / Educator",
    description: "For teachers and educators.",
    Icon: BookOpen,
  },
  {
    id: "family",
    label: "Family / Parent",
    description:
      "For parents and families supporting growth and learning.",
    Icon: UsersRound,
  },
];

export default function AccountTypeStep({
  loginPath = "/login",
  onComplete,
}) {
  const [selected, setSelected] = useState(null);

  const handleContinue = () => {
    if (!selected) return;

    if (onComplete) {
      onComplete(selected);
      return;
    }

    try {
      window.localStorage.setItem("accountType", selected);
    } catch (error) {
      console.error("Unable to save account type:", error);
    }

    window.location.href = loginPath;
  };

  return (
<main
  className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12 text-white"
  style={{
    background: "linear-gradient(160deg, #33291a 0%, #1c160d 45%, #0a0806 100%)",
  }}
>
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full" />
      </div>

      {/* ACCOUNT SELECTION PANEL */}
      <div className="relative z-20 w-full max-w-[560px]">

        <div className="w-full min-h-[600px] rounded-3xl border border-[#D4AF37]/20 bg-[#1c1c1c]/85 p-6 sm:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl">

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Choose Your{" "}
              <span className="text-[#E8C868] italic font-serif">
                Account Type
              </span>
            </h2>

            <p className="mt-2 text-xs leading-5 text-white/45">
              Select the option that best describes you. You can always change
              this later.
            </p>
          </div>

          {/* Account Type Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-5">
            {ACCOUNT_TYPES.map(({ id, label, description, Icon }) => {
              const isSelected = selected === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelected(id)}
                  aria-pressed={isSelected}
                  className={`
                    group relative cursor-pointer flex flex-col justify-between
                    rounded-2xl border p-4 text-left
                    transition-all duration-300 focus:outline-none min-h-[110px]
                    ${
                      isSelected
                        ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_20px_rgba(212,175,55,0.18)]"
                        : "border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 hover:bg-white/[0.06]"
                    }
                  `}
                >
                  {/* Selected Check */}
                  {isSelected && (
                    <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#E8C868] text-black shadow-[0_0_10px_#E8C868]">
                      <Check size={11} strokeWidth={3} />
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-lg border
                      transition-all duration-300
                      ${
                        isSelected
                          ? "border-[#D4AF37]/50 bg-[#D4AF37]/20"
                          : "border-white/10 bg-white/5 group-hover:border-[#D4AF37]/30"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors duration-300 ${
                        isSelected
                          ? "text-[#E8C868]"
                          : "text-white/60 group-hover:text-[#E8C868]"
                      }`}
                    />
                  </div>

                  {/* Text */}
                  <div className="mt-3">
                    <h3
                      className={`text-xs font-semibold tracking-wide transition-colors ${
                        isSelected
                          ? "text-[#E8C868]"
                          : "text-white group-hover:text-[#E8C868]"
                      }`}
                    >
                      {label}
                    </h3>

                    <p className="mt-1 text-[10.5px] leading-4 text-white/40">
                      {description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Continue Button */}
          <div className="mt-6 pt-10">
            <button
              type="button"
              onClick={handleContinue}
              disabled={!selected}
              className={`
                group relative flex w-full items-center justify-center gap-2
                overflow-hidden rounded-xl py-3 text-xs sm:text-sm font-semibold
                transition-all duration-300 cursor-pointer
                ${
                  selected
                    ? "bg-[#D4AF37] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:bg-[#e6c148] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]"
                    : "cursor-not-allowed border border-white/5 bg-white/10 text-white/20"
                }
              `}
            >
              <span className="relative z-10">Continue</span>

              <ArrowRight
                size={15}
                className={`relative z-10 transition-transform duration-300 ${
                  selected ? "group-hover:translate-x-1" : ""
                }`}
              />
            </button>

            <p className="mt-3 text-center text-[10px] text-white/30">
              Your account type helps us personalize your Ray Amor experience.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}