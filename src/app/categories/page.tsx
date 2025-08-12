import { fetchCategories } from "@/api-fetcher/fetcher"
import { Link } from "@/components/juankui/optionals/link"
import { Section } from "@/components/juankui/wrappers/section"
import { ShineBorder } from "@/components/magicui/shine-border"
import { Card, CardContent } from "@/components/ui/card"
import { createPageTitle, formatDate } from "@/lib/utils"
import { capitalize } from "@/utils/capitalize"
import { Metadata } from "next"
import { createMetadata } from "../seo/createMetadata"


export async function generateMetadata(): Promise<Metadata> {
  return await createMetadata();
}

export default async function CategoriesPage() {
  const categories = await fetchCategories()
  if (categories.length === 0) {
    return <main className="flex flex-col w-full flex-1 items-center justify-center">No categories found</main>
  }
  return (
    <main className={`flex w-full flex-1 flex-col items-center justify-center pb-10`}>
      <Section className="h-full items-center flex flex-col justify-center my-10">
        <div className='grid grid-cols-1 items-center justify-center gap-5 lg:max-w-[60vw] lg:flex lg:flex-row lg:flex-wrap'>

          {categories?.map((category) => (
            <div key={category.seo_url} className="rounded-lg bg-slate-700 duration-400 scale-custom relative h-[250px] w-[250px] overflow-hidden border-none shadow-none transition hover:bg-[var(--color-primary-dark)]">
              <Link href={`/categories/${category.seo_url}`} className="flex w-full">

                {/* Imagen como background */}
                <div
                  className="h-ful relative w-full bg-cover bg-center"
                >

                  {/* Contenido centrado */}
                  <CardContent className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold">{category.name}</h2>
                      <p className="text-sm text-white opacity-80">{formatDate(category.created_at)}</p>
                      <p className="text-base text-white opacity-90">{category.description}</p>
                    </div>
                  </CardContent>
                </div>
              </Link>
            </div>
          ))
          }
        </div>
      </Section>
    </main>
  )
}

