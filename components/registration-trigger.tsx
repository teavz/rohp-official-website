"use client";

import Image from "next/image";

import { MagneticButton } from "@/components/ui/magnetic-button";

type RegistrationTriggerProps = {
  label: string;
  formUrl: string;
};

export function RegistrationTrigger({ label, formUrl }: RegistrationTriggerProps) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    const win = window.open(formUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = formUrl;
    }
  };

  return (
    <div className="flex justify-center">
      <MagneticButton>
        <button
          type="button"
          onClick={handleClick}
          className="relative block w-[260px] h-[200px] rounded-2xl overflow-hidden shadow-lg hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--berkeley-blue)] focus-visible:ring-offset-2"
        >
          <Image
            src="/bear.png"
            alt=""
            fill
            sizes="260px"
            className="object-cover pointer-events-none"
            unoptimized
          />
          <span className="absolute inset-0 flex items-center justify-center p-3 text-center text-sm font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {label}
          </span>
        </button>
      </MagneticButton>
    </div>
  );
}
