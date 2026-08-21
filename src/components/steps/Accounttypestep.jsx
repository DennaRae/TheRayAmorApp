import React, { useState } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Building2,
  Check,
  ArrowRight,
  Sparkles,
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
  description: "For parents and families supporting growth and learning.",
  Icon: UsersRound,
},
];

const CONCIERGE_MESSAGES = {
  default:
    "Welcome to Ray Amor. Let's make today legendary.",
  individual:
    "Great choice. Individual accounts are tuned for your own personal routine.",
  student:
    "Nice. Student accounts unlock your class tools and learning tracks.",
  teacher:
    "Perfect. Educator accounts give you classroom and student management tools.",
  family:
  "Wonderful. Family accounts help parents support and organize their family's routines and learning.",
};

export default function AccountTypeStep({
  loginPath = "/login",
  onComplete,
  backgroundImageUrl = "/background.png",
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

  const message = selected
    ? CONCIERGE_MESSAGES[selected]
    : CONCIERGE_MESSAGES.default;

  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden flex items-center justify-between p-4 sm:p-8 lg:p-12">

      {/* =========================================================
          FULL-SCREEN BACKGROUND (EXACT MATCH TO LOGIN SCREEN)
      ========================================================= */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`,
          backgroundPosition: "center center",
        }}
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/70 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-black/15 pointer-events-none z-[1]" />

      {/* =========================================================
          TOP ARCHITECTURAL BRANDING
      ========================================================= */}
      <div className="absolute top-10 left-[41%] -translate-x-1/2 z-10 text-center pointer-events-none hidden md:block">
        <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.4em] text-[#E8C868] uppercase font-light drop-shadow-[0_4px_18px_rgba(212,175,55,0.7)]">
          Ray Amor
        </h1>
        <p className="text-[10px] tracking-[0.25em] text-[#E8C868]/70 uppercase mt-0.5">
          AI Mind Organizing Routine
        </p>
      </div>

      {/* =========================================================
          BOTTOM-LEFT LUMI CONCIERGE CARD
      ========================================================= */}
         <div className="mt-90  mb-4 ml-98 bg-black/60 border border-amber-500/40 rounded-2xl p-6 w-60 backdrop-blur-sm">
          <p className="text-amber-300 text-lg font-medium">
            Hi, I&apos;m Lumi <span className="align-middle">✨</span>
          </p>
          <p className="text-amber-400 text-sm font-semibold mt-1">
            Your AI Concierge
          </p>
          <p className="text-gray-200 text-sm mt-2 leading-relaxed">
            Welcome to Ray Amor.
            <br />
            Let&apos;s make today legendary.
          </p>
        </div> 

      {/* =========================================================
          RIGHT FLOATING PANEL (ACCOUNT SELECTION MODAL)
      ========================================================= */}
      <div className="relative z-20 w-full max-w-[500px] ml-auto">
        <div className="w-full min-h-[600px] rounded-3xl border border-[#D4AF37]/25 bg-black/8
        0 p-6 sm:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl">

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Choose Your{" "}
              <span className="text-[#E8C868] italic font-serif">Account Type</span>
            </h2>
            <p className="mt-2 text-xs leading-5 text-white/45">
              Select the option that best describes you. You can always change this later.
            </p>
          </div>

          {/* Account Type Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-5 ">
            {ACCOUNT_TYPES.map(({ id, label, description, Icon }) => {
              const isSelected = selected === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelected(id)}
                  aria-pressed={isSelected}
                  className={`
                    group relative cursor-pointer flex flex-col justify-between rounded-2xl border p-4 text-left
                    transition-all duration-300 focus:outline-none min-h-[110px]
                    ${
                      isSelected
                        ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_20px_rgba(212,175,55,0.18)]"
                        : "border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 hover:bg-white/[0.06]"
                    }
                  `}
                >
                  {/* Selected check badge */}
                  {isSelected && (
                    <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#E8C868] text-black shadow-[0_0_10px_#E8C868]">
                      <Check size={11} strokeWidth={3} />
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300
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
                        isSelected ? "text-[#E8C868]" : "text-white/60 group-hover:text-[#E8C868]"
                      }`}
                    />
                  </div>

                  {/* Text details */}
                  <div className="mt-3">
                    <h3
                      className={`text-xs font-semibold tracking-wide transition-colors ${
                        isSelected ? "text-[#E8C868]" : "text-white group-hover:text-[#E8C868]"
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

          {/* Action / Continue Button */}
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