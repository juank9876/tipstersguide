import { Card, CardContent } from '@/components/ui/card'
import { ShineBorder } from '@/components/magicui/shine-border'
import Image from 'next/image'
import { decodeHtmlEntities, formatDate, limitCharacters } from '@/lib/utils'
import { Link } from '@/components/juankui/optionals/link'
import { Category, Post } from '@/types/types'

export function CardPostCategory({ post, category }: { post: Post, category: Category }) {
  //const categoryUrl = category.parent_id ? category.parent_slug + "/" + category.slug : category.slug
  const categoryUrl = category.slug

  return (
    <>
      {/*Card para PC*/}
      <div className="rounded-lg w-[250px] h-[400px] group relative overflow-hidden border-none p-0 shadow-none transition-all duration-300 hover:scale-[1.02]">
        <Link href={`${categoryUrl}/${post.slug}`} className="h-full w-full">

          <div
            className="relative h-full w-full bg-cover bg-center transition-transform duration-300"
            style={{
              backgroundImage: `url(${post.featured_image || "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"})`,
            }}
          >
            {/* Overlay with blur */}
            <div className="absolute inset-0 h-full bg-gradient-to-t from-black/90 via-black/70 to-black/30 backdrop-blur-[2px]"></div>

            <CardContent className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 md:p-6">
              {/* Main Content */}
              <div className="flex h-full flex-col space-y-4">
                {/* Title and Date */}
                <div className='bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary-semi-dark)] px-3 backdrop-blur-sm rounded-full border border-[var(--color-primary)] w-fit'>
                  <p className="text-xs text-gray-300 sm:text-sm">
                    {formatDate(post.published_at || post.updated_at)}
                  </p>

                </div>
                <h2 className="text-xl font-bold text-start text-white">
                  {decodeHtmlEntities(limitCharacters(post.title, 40))}
                </h2>

                {/* Excerpt - Hidden on mobile */}
                <p className="text-sm text-gray-300">
                  {decodeHtmlEntities(limitCharacters(post.excerpt, 150))}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-4 flex items-center justify-between rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-purple-400 sm:h-10 sm:w-10">
                    <Image
                      src={post.author_avatar || `https://api.dicebear.com/7.x/lorelei/svg?seed=${post.author_name || "default"}`}
                      alt={post.author_name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-white sm:text-sm">
                      {post.author_name}
                    </span>
                    <span className="text-xs text-gray-300">
                      {formatDate(post.published_at || post.updated_at)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Link>
      </div>

      {/*Card para movil*/}
      <Card className="duration-400 scale-custom relative w-full overflow-hidden border-none p-0 shadow-none transition hover:bg-[var(--color-primary-dark)] lg:hidden">
        <Link href={`/categories/${category.slug}/${post.slug}`} className="block w-full">


          {/* Imagen como background */}
          <div
            className="h-ful relative w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${post.featured_image || "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"})`,
            }}
          >
            {/* Overlay oscuro con filtro */}
            <div className="backdrop-blur-xs absolute inset-0 h-full bg-black/70"></div>

            {/* Contenido centrado */}
            <CardContent className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <p className="text-sm text-white opacity-80">{formatDate(post.published_at)}</p>
                <p className="text-base text-white opacity-90">{post.excerpt}</p>
              </div>

              {/* Autor */}
              <div className="flex flex-row items-center space-x-3">
                <div className="size-10 relative mb-0 overflow-hidden rounded-full">
                  <Image
                    src={
                      post.author_avatar ||
                      `https://api.dicebear.com/7.x/lorelei/svg?seed=${post.author_name || "default"}`
                    }
                    alt={post.id}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-muted text-sm">{post.author_name}</p>
              </div>
            </CardContent>
          </div>
        </Link>
      </Card>

    </>
  )
}