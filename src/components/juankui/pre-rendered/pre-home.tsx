import { HeroHomePage } from '@/components/juankui/hero/hero'
import { MainWrapper } from '@/components/juankui/wrappers/main-wrapper'
//import { capitalize } from '@/utils/capitalize'
import { ReactNode } from 'react'
import { Section } from '../wrappers/section'
import { isParticles } from '@/config/options'
import { ParticlesFull } from '../hero/particles'
import { Page, SiteSettings } from '@/types/types'

interface HomePage {
  children: ReactNode
  settings: SiteSettings
  pageProps: Page
}

export function PreHomePage({ children, settings, pageProps }: HomePage) {
  const props = {
    ...settings,
    ...pageProps
  }
  return (
    <MainWrapper className="">
      {isParticles && <ParticlesFull />}

      {//<HeroHomePage {...props} />
      }


      {children}

    </MainWrapper>
  )
}