import React from "react";

/**
 * Replace these placeholder arrays with your real thumbnail + layer assets.
 * Each option has:
 *  - thumb: small square image shown in the picker grid
 *  - layer: full-size image used to compose the big preview circle (optional,
 *           only needed for `face` since face already contains the base look
 *           in your current mock; if you later split hair/outfit into their
 *           own transparent PNG layers, give hairstyle/outfit/accessories a
 *           `layer` too and the preview will stack them automatically).
 */
const FACE_OPTIONS = [
  { id: "face-1", thumb: "/assets/avatar/face-1.png", layer: "/assets/avatar/face-1.png" },
  { id: "face-2", thumb: "/assets/avatar/face-2.png", layer: "/assets/avatar/face-2.png" },
  { id: "face-3", thumb: "/assets/avatar/face-3.png", layer: "/assets/avatar/face-3.png" },
  { id: "face-4", thumb: "/assets/avatar/face-4.png", layer: "/assets/avatar/face-4.png" },
  { id: "face-5", thumb: "/assets/avatar/face-5.png", layer: "/assets/avatar/face-5.png" },
  { id: "face-6", thumb: "/assets/avatar/face-6.png", layer: "/assets/avatar/face-6.png" },
];

const HAIR_OPTIONS = [
  { id: "hair-1", thumb: "/assets/avatar/hair-1.png" },
  { id: "hair-2", thumb: "/assets/avatar/hair-2.png" },
  { id: "hair-3", thumb: "/assets/avatar/hair-3.png" },
  { id: "hair-4", thumb: "/assets/avatar/hair-4.png" },
  { id: "hair-5", thumb: "/assets/avatar/hair-5.png" },
  { id: "hair-6", thumb: "/assets/avatar/hair-6.png" },
];

const OUTFIT_OPTIONS = [
  { id: "outfit-1", thumb: "/assets/avatar/outfit-1.png" },
  { id: "outfit-2", thumb: "/assets/avatar/outfit-2.png" },
  { id: "outfit-3", thumb: "/assets/avatar/outfit-3.png" },
  { id: "outfit-4", thumb: "/assets/avatar/outfit-4.png" },
  { id: "outfit-5", thumb: "/assets/avatar/outfit-5.png" },
];

const ACCESSORY_OPTIONS = [
  { id: "earrings", thumb: "/assets/avatar/earrings.png" },
  { id: "pendant", thumb: "/assets/avatar/pendant.png" },
  { id: "layered-necklace", thumb: "/assets/avatar/layered-necklace.png" },
  { id: "glasses", thumb: "/assets/avatar/glasses.png" },
  { id: "choker", thumb: "/assets/avatar/choker.png" },
];

function ThumbGrid({ label, options, selectedId, onSelect }) {
  return (
    <div>
      <p className="text-sm text-neutral-300 mb-2">{label}</p>
      <div className="grid grid-cols-6 gap-2">
        {options.map((opt) => {
          const isSelected = selectedId === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.id)}
              className={[
                "aspect-square rounded-lg overflow-hidden border bg-neutral-800",
                isSelected ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/50" : "border-neutral-700",
              ].join(" ")}
            >
              <img
                src={opt.thumb}
                alt={opt.id}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AvatarStep({ avatar, onChange }) {
  const { gender, face, hairstyle, outfit, accessory } = avatar;

  const set = (key) => (value) => onChange({ ...avatar, [key]: value });

  const previewFace = FACE_OPTIONS.find((f) => f.id === face) || FACE_OPTIONS[0];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#D4AF37] text-center">
        Create Your Avatar (Optional)
      </h1>
      <p className="text-neutral-400 text-center mt-2 mb-8">
        Personalize your experience with a custom avatar.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Preview */}
        <div className="flex flex-col items-center md:w-64 shrink-0">
          <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-[#D4AF37] relative bg-neutral-900">
            {/* Stack layers here as you add real transparent PNGs:
                face -> hairstyle -> outfit -> accessory */}
            <img
              src={previewFace.layer}
              alt="avatar preview"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-5 inline-flex rounded-lg overflow-hidden border border-neutral-700">
            <button
              type="button"
              onClick={() => set("gender")("female")}
              className={[
                "px-6 py-2 text-sm font-medium",
                gender === "female" ? "bg-[#D4AF37] text-black" : "bg-transparent text-neutral-300",
              ].join(" ")}
            >
              Female
            </button>
            <button
              type="button"
              onClick={() => set("gender")("male")}
              className={[
                "px-6 py-2 text-sm font-medium",
                gender === "male" ? "bg-[#D4AF37] text-black" : "bg-transparent text-neutral-300",
              ].join(" ")}
            >
              Male
            </button>
          </div>
        </div>

        {/* Option pickers */}
        <div className="flex-1 space-y-6">
          <ThumbGrid label="Face" options={FACE_OPTIONS} selectedId={face} onSelect={set("face")} />
          <ThumbGrid label="Hairstyle" options={HAIR_OPTIONS} selectedId={hairstyle} onSelect={set("hairstyle")} />
          <ThumbGrid label="Outfit" options={OUTFIT_OPTIONS} selectedId={outfit} onSelect={set("outfit")} />
          <ThumbGrid label="Accessories" options={ACCESSORY_OPTIONS} selectedId={accessory} onSelect={set("accessory")} />
        </div>
      </div>
    </div>
  );
}