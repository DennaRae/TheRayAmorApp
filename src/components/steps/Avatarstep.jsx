import React from "react";


const FACE_OPTIONS = [
  { id: "face-1", thumb: "/assets/avatar/face1.png", layer: "/assets/avatar/face1.png" },
  { id: "face-2", thumb: "/assets/avatar/face2.png", layer: "/assets/avatar/face2.png" },
  { id: "face-3", thumb: "/assets/avatar/face3.png", layer: "/assets/avatar/face3.png" },
  { id: "face-4", thumb: "/assets/avatar/face4.png", layer: "/assets/avatar/face4.png" },
  { id: "face-5", thumb: "/assets/avatar/face5.png", layer: "/assets/avatar/face5.png" },
  { id: "face-6", thumb: "/assets/avatar/face6.png", layer: "/assets/avatar/face6.png" },
];

const HAIR_OPTIONS = [
  { id: "hair-1", thumb: "/assets/avatar/face1.png" },
  { id: "hair-2", thumb: "/assets/avatar/face2.png" },
  { id: "hair-3", thumb: "/assets/avatar/face3.png" },
  { id: "hair-4", thumb: "/assets/avatar/face4.png" },
  { id: "hair-5", thumb: "/assets/avatar/face5.png" },
  { id: "hair-6", thumb: "/assets/avatar/face6.png" },
];

const OUTFIT_OPTIONS = [
  { id: "outfit-1", thumb: "/assets/avatar/face1.png" },
  { id: "outfit-2", thumb: "/assets/avatar/face2.png" },
  { id: "outfit-3", thumb: "/assets/avatar/face3.png" },
  { id: "outfit-4", thumb: "/assets/avatar/face4.png" },
  { id: "outfit-5", thumb: "/assets/avatar/face5.png" },
];

const ACCESSORY_OPTIONS = [
  { id: "earrings", thumb: "/assets/avatar/earings.png" },
  { id: "pendant", thumb: "/assets/avatar/pendant.png" },
  { id: "layered-necklace", thumb: "/assets/avatar/necklace.png" },
  { id: "glasses", thumb: "/assets/avatar/glass.png" },
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
          
            <img
              src="/girlimage.png"
              alt="avatar preview1"
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