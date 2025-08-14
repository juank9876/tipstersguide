//import menu from '@/lib/menu.json'
import { NavigationMenu } from '@/components/ui/navigation-menu'
import { fetchAllSlugs, fetchCategories, fetchMenu } from '@/api-fetcher/fetcher'
import { normalizeUrl } from '@/lib/utils'
import { contextSiteSettings } from '@/app/context/getSiteSettings'
import { Logo } from './logo'
import { RenderMenu } from './render-menu'
import { NavMobile } from './nav-mobile'
import { headers } from 'next/headers';
import { navWidth, navWidthMobile } from '@/config/options'



export async function Header() {
  const headersList = await headers();
  const rawNavItems = await fetchMenu()
  const navItems = rawNavItems.filter(item => item.status === 'active')
  const sortedItems = navItems.sort((a, b) => Number(a.sort_order) - Number(b.sort_order))
  const allSlugs = await fetchAllSlugs("category")

  const normalizedItems = sortedItems.map(item => ({
    ...item,
    url: normalizeUrl(item.url)
  }))

  const categoriesItems = await fetchCategories()
  const settings = await contextSiteSettings()

  const navProps = { categoriesItems, settings, normalizedItems }
  return (
    <>
      <header className="sticky top-0 min-h-[70px] z-50 flex w-full flex-row items-center justify-center bg-[var(--color-primary-dark)] px-5 ">
        <div className={`${navWidth} ${navWidthMobile} mx-auto flex h-full flex-row items-center justify-between`}>
          <Logo
            {...settings}
          />

          <NavigationMenu className='hidden lg:flex'>
            <RenderMenu
              normalizedItems={normalizedItems}
              allSlugs={allSlugs}
            />
          </NavigationMenu>
        </div>

        {/* VERSION MOVIL */}
        <NavMobile {...navProps} />
      </header>
    </>
  )
}
