import { ReactNode } from "react";
import { ParticlesFull } from "../hero/particles";
import { isParticles } from "@/config/options";

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
    <section
      className={`relative flex w-full h-full items-center justify-center ${className}`}
      style={style}
    >
      {isParticles && <ParticlesFull />}

      <article className={`flex w-[90vw] h-full flex-col items-center justify-center space-y-3 rounded-lg lg:w-[60vw]`}>
        {children}
      </article>

    </section>
  )
}