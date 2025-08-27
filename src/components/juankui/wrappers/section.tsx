import { ReactNode } from "react";
import { ParticlesFull } from "../hero/particles";
import { htmlContentWidth, htmlContentWidthMobile, isParticles } from "@/config/options";

interface SectionProps {
  children: ReactNode,
  title?: string,
  description?: string,
  gradientBackground?: 'bg-gradient-middle' | 'bg-gradient-top' | 'bg-gradient-bottom' | ''
  className?: string
  style?: React.CSSProperties
}

export function Section({ children, className, style }: SectionProps) {
  return (
    <div
      className={`relative flex flex-col w-[70vw] h-full items-center justify-center ${className}`}
      style={style}
    >
      {isParticles && <ParticlesFull />}

      {children}
    </div>
  )
}