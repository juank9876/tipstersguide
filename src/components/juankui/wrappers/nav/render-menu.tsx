'use client'

import { navPosition } from '@/config/options'
import { capitalize } from '@/utils/capitalize'
import { Category, NavItemType, Slug } from '@/types/types';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Link } from '@/components/juankui/optionals/link';
import { useState } from 'react';
import { NavLink } from './nav-link';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

type ListItemProps = {
  title: string;
  href: string;
  children?: React.ReactNode;
  className?: string
  isChild?: boolean
  childCategories?: NavItemType[]
  parentSlug?: string
}



function ListItem({ title, href, className, isChild = false, childCategories, parentSlug }: ListItemProps) {
  const hasSubcategories = childCategories && childCategories.length > 0;
  const [open, setOpen] = useState(false);
  const parentSlugFull = parentSlug + href;

  return (
    <li
      className={hasSubcategories ? 'relative ' : ''}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        href={parentSlug ? `${parentSlug}${href}` : href}
        className={`flex items-center px-4 py-2.5 text-lg text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 hover:text-yellow-900 rounded-md transition-all duration-200 ${bebasNeue.className} ${isChild ? 'pl-6 text-sm border-l-2 border-transparent hover:border-blue-500' : ''}`}      >
        {title}
        {hasSubcategories && (
          <ChevronUp className={`text-gray-400 ml-2 h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-90' : ''}`} />
        )}
      </NavLink>
      {hasSubcategories && (
        <ul className={`absolute right-full top-0 mt-0 ml-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-100 z-30 ${open ? 'block' : 'hidden'}`}>
          {childCategories!.map((subcat) => (
            <ListItem
              key={subcat.id}
              title={capitalize(subcat.title)}
              href={subcat.url}
              childCategories={subcat.children}
              parentSlug={parentSlugFull || undefined}
            />
          ))}
        </ul>
      )}
    </li>
  )
}



// ... existing code ...
export function RenderMenu({ normalizedItems, allSlugs }: { normalizedItems: NavItemType[], allSlugs: Slug[] }) {
  return (
    <nav className='px-2'>
      <ul className="flex flex-row items-center justify-center space-x-1">
        {normalizedItems.map((item) => (
          <li key={item.id} className="relative group/menu">
            {item.children && item.children.length > 0 ? (
              <>
                <span className={`flex text-xl items-center gap-1 px-4 py-2.5 cursor-pointer font-semibold text-gray-100 hover:text-[#ffd028] transition-all duration-200 rounded-md hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 ${bebasNeue.className}`}>
                  {capitalize(item.title)}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 opacity-70 group-hover/menu:rotate-180" />
                </span>
                <div className="absolute left-0 top-full w-[280px] bg-white rounded-lg z-20 hidden group-hover/menu:block shadow-xl border border-gray-100 py-2">
                  <ul className="py-1">
                    {item.children.map((category) => {
                      const foundCategory = Object.entries(allSlugs).find(([slug, data]) => {
                        return '/' + slug === category.url;
                      });
                      const isCategory = foundCategory ? `/categories` : "";

                      return (
                        <ListItem
                          key={category.id}
                          title={capitalize(category.title)}
                          href={category.url}
                          childCategories={category.children}
                          parentSlug={isCategory}
                        />
                      )
                    })}
                  </ul>
                </div>
              </>
            ) : (
              <NavLink
                href={item.url}
                className={`
                  group flex text-xl font-semibold text-gray-100 hover:text-[#ffd028] px-4 py-2.5 transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 rounded-md ${bebasNeue.className}`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#ffd028] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.title}
                </span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}