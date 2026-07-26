import React from "react";
import { User, GraduationCap, BookOpen, Building2, Check } from "lucide-react";

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
    id: "organization",
    label: "Organization / Partner",
    description: "For schools, districts, and organizations.",
    Icon: Building2,
  },
];

export default function AccountTypeStep({ selected, onSelect }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#D4AF37] text-center">
        Choose Your Account Type
      </h1>
      <p className="text-neutral-400 text-center mt-2 mb-8">
        Select the option that best describes you. You can always change this later.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ACCOUNT_TYPES.map(({ id, label, description, Icon }) => {
          const isSelected = selected === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              className={[
                "relative flex flex-col items-center text-center rounded-xl border px-5 py-8 transition-colors",
                "bg-black/40 hover:border-[#D4AF37]/60",
                isSelected ? "border-[#D4AF37]" : "border-neutral-700",
              ].join(" ")}
            >
              {isSelected && (
                <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <Check size={12} strokeWidth={3} className="text-black" />
                </span>
              )}

              <Icon
                size={40}
                strokeWidth={1.5}
                className={isSelected ? "text-[#D4AF37]" : "text-neutral-300"}
              />

              <p
                className={[
                  "mt-4 font-medium",
                  isSelected ? "text-[#D4AF37]" : "text-white",
                ].join(" ")}
              >
                {label}
              </p>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                {description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}