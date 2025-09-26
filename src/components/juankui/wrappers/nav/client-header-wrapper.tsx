'use client'

import { useEffect, useState, createContext, useContext } from 'react'

interface ClientHeaderWrapperProps {
  children: React.ReactNode
}

const ScrollContext = createContext(false)

export const useScrolled = () => useContext(ScrollContext)

export function ClientHeaderWrapper({ children }: ClientHeaderWrapperProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='sticky top-0 z-50 flex w-full flex-row items-center justify-center bg-[#0A0B2E] px-5 py-3'>
      {children}
    </header>
  )
}
