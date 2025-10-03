'use client'

import { capitalize } from '@/utils/capitalize'
import { NavItemType, Slug } from '@/types/types'
import { ChevronRight, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from './nav-link'
import { Bebas_Neue } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Link } from '@/components/juankui/optionals/link'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// ============================================================================
// CONSTANTES Y ESTILOS
// ============================================================================

const MENU_STYLES = {
  base: `flex text-xl items-center gap-1 px-4 py-2.5 cursor-pointer font-semibold text-gray-100 hover:text-[#ffd028] transition-all duration-200 rounded-md hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700`,
  dropdown: "absolute left-0 top-full w-[280px] bg-white rounded-lg z-20 hidden group-hover/menu:block shadow-xl border border-gray-100 py-2",
  submenu: "absolute right-full top-0 mt-0 ml-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-100 z-30"
} as const

// ============================================================================
// COMPONENTES
// ============================================================================

type ListItemProps = {
  title: string
  href: string
  isChild?: boolean
  childCategories?: NavItemType[]
  parentSlug?: string
}

type rotation = "rotate-90" | "rotate-0" | "rotate-180"

function ChevronIcon({ isSubmenu, rotation }: { isSubmenu?: boolean; rotation: rotation }) {
  const Icon = isSubmenu ? ChevronRight : ChevronUp

  return (
    <Icon
      className={cn(
        "text-current h-4 w-4 transition-transform duration-300 ease-out",
        isSubmenu ? "ml-auto" : "ml-1",
        rotation
      )}
    />
  )
}

function ListItem({ title, href, isChild = false, childCategories, parentSlug }: ListItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubcategories = childCategories && childCategories.length > 0
  const fullHref = parentSlug ? `${parentSlug}${href}` : href
  const fullParentSlug = parentSlug ? parentSlug + href : href

  return (
    <li
      className={cn("relative w-full flex ", hasSubcategories && "has-submenu")}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        href={fullHref}
        className={cn(
          "flex w-full items-center px-4 py-2.5 text-lg text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 hover:text-yellow-900 rounded-md transition-all duration-200",
          bebasNeue.className,
          isChild && "pl-6 text-sm border-l-2 border-transparent hover:border-blue-500"
        )}
      >
        {title}
        {hasSubcategories && <ChevronIcon rotation={isOpen ? "rotate-180" : "rotate-0"} isSubmenu />}
      </NavLink>

      {hasSubcategories && (
        <ul
          className={cn(
            MENU_STYLES.submenu,
            isOpen ? "block" : "hidden"
          )}
        >
          {childCategories.map((subcat) => (
            <ListItem
              key={subcat.id}
              title={capitalize(subcat.title)}
              href={subcat.url}
              childCategories={subcat.children}
              parentSlug={fullParentSlug}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

function MenuItemWithDropdown({
  item,
  allSlugs
}: {
  item: NavItemType
  allSlugs: Slug[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  const getCategoryPrefix = (categoryUrl: string) => {
    const foundCategory = Object.entries(allSlugs).find(
      ([slug]) => `/${slug}` === categoryUrl
    )
    return foundCategory ? '/categories' : ''
  }

  return (
    <>
      <Link
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        href={item.url}
        className={cn(
          MENU_STYLES.base,
          bebasNeue.className
        )}
      >
        {capitalize(item.title)}
        <ChevronIcon rotation={isOpen ? "rotate-90" : "rotate-0"} isSubmenu />
      </Link>

      <div className={MENU_STYLES.dropdown}>
        <ul className="py-1">
          {item.children?.map((category) => (
            <ListItem
              key={category.id}
              title={capitalize(category.title)}
              href={category.url}
              childCategories={category.children}
              parentSlug={getCategoryPrefix(category.url)}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

function MenuItemSimple({ item }: { item: NavItemType }) {
  return (
    <NavLink
      href={item.url}
      className={cn(
        "group flex text-xl font-semibold text-gray-100 hover:text-[#ffd028] px-4 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 rounded-md",
        bebasNeue.className
      )}
    >
      <span className="flex items-center gap-2">
        <span className="w-1 h-1 bg-[#ffd028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
        {item.title}
      </span>
    </NavLink>
  )
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================

export function RenderMenu({
  normalizedItems,
  allSlugs
}: {
  normalizedItems: NavItemType[]
  allSlugs: Slug[]
}) {
  return (
    <nav className="px-2">
      <ul className="flex flex-row items-center w-full justify-center space-x-1">
        {normalizedItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0

          return (
            <li key={item.id} className="relative group/menu">
              {hasChildren ? (
                <MenuItemWithDropdown item={item} allSlugs={allSlugs} />
              ) : (
                <MenuItemSimple item={item} />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}