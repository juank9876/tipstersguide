import { fetchAllSlugs, fetchCategories, fetchMenu, fetchTags } from '@/api-fetcher/fetcher'
import { normalizeUrl } from '@/lib/utils'
import { contextSiteSettings } from '@/app/context/getSiteSettings'
import { NavItemType } from '@/types/types';

export async function getHeaderData() {
    const [rawNavItems, allSlugs, categoriesItems, settings, tagsItems] = await Promise.all([
        fetchMenu(),
        fetchAllSlugs("category"),
        fetchCategories(),
        contextSiteSettings(),
        fetchTags(),
    ]);

    // Filtrar y ordenar nav items activos
    const normalizedItems: NavItemType[] = rawNavItems
        .filter(item => item.status === "active")
        .sort((a, b) => Number(a.sort_order) - Number(b.sort_order))
        .map(item => ({
            ...item,
            url: normalizeUrl(item.url),
        }));

    return { normalizedItems, allSlugs, categoriesItems, settings, tagsItems };
}