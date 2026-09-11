
import React from "react";

const colors = [
  { code: "A-104", name: "Dark Grey", hex: "#28345c", stroke: "#28345c" },
  { code: "A-101", name: "Grey", hex: "#8a8d90", stroke: "#8a8d90" },
  { code: "A-115", name: "White", hex: "#ffffff", stroke: "#2b2b2b" },
  { code: "A-123", name: "Black", hex: "#161a1f", stroke: "#161a1f" },
  { code: "A-106", name: "Dark Blue", hex: "#1f3566", stroke: "#1f3566" },
  { code: "A-107", name: "Blue", hex: "#4f7fbf", stroke: "#4f7fbf" },
  { code: "A-118", name: "Light Blue", hex: "#9cc0e0", stroke: "#9cc0e0" },
  { code: "A-135", name: "Orange", hex: "#f2861e", stroke: "#f2861e" },
  { code: "A-136", name: "Green", hex: "#0f7a5c", stroke: "#0f7a5c" },
  { code: "A-125", name: "Yellow", hex: "#f4d949", stroke: "#f4d949" },
  { code: "A-201", name: "Purple", hex: "#c9b7dd", stroke: "#c9b7dd" },
  { code: "A-100", name: "Red", hex: "#b8112f", stroke: "#b8112f" },
];

function TShirtIcon({ hex, stroke }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-14 w-14 sm:h-16 sm:w-16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6L12 12L4 22L12 28L16 24V56C16 57.1 16.9 58 18 58H46C47.1 58 48 57.1 48 56V24L52 28L60 22L52 12L42 6C42 9.3 37.5 12 32 12C26.5 12 22 9.3 22 6Z"
        fill={hex}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ColorCard({ code, name, hex, stroke }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <TShirtIcon hex={hex} stroke={stroke} />

      <span className="text-xs font-medium text-slate-700 sm:text-sm">
        {code} {name}
      </span>
    </div>
  );
}

export default function Season({ text }) {
  return (
    <div className="mx-auto w-[80vw] px-6 py-12 md:px-12">
      <p className="text-center font-semibold text-slate-800 sm:text-xl">
        {text}
      </p>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6">
          {colors.map((c) => (
            <ColorCard key={c.code} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
