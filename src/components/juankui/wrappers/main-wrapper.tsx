import { ReactNode } from "react";

export function MainWrapper({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <main className={"flex h-full w-full flex-1 flex-col items-center justify-center" + (className ? " " + className : "")} >
      {children}
    </main>
  )
}