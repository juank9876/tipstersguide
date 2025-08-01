import { capitalize } from '@/utils/capitalize'
import HtmlRenderer from '@/components/html-transform/html-renderer'
import { PrePage } from '@/components/juankui/pre-rendered/pre-page'
import { fetchArticleById, fetchPageById, fetchSiteSettings } from '@/api-fetcher/fetcher'
import { createPageTitle, getPageSlugToIdMap, getPostSlugToIdMap } from '@/lib/utils'
import { PreHomePage } from '@/components/juankui/pre-rendered/pre-home'
import NotFound from '@/app/not-found'
import { debug, debugLog } from '@/config/debug-log'
import { PrePost } from '@/components/juankui/pre-rendered/pre-post'

async function getHomePageFromParams() {

  const map = await getPageSlugToIdMap();
  const slug = "home";
  const id = map[slug];

  const homePage = await fetchPageById(id)
  return homePage
}

async function getPageFromParams({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const map = await getPageSlugToIdMap()
  const { slug } = await params
  const id = map[slug]
  debugLog(debug.fetchPosts, 'Fetching home page with slug: ' + slug + ' and id: ' + id);

  const page = await fetchPageById(id)
  return page
}

async function getPostFromParams({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const map = await getPostSlugToIdMap()
  const { slug } = await params
  const id = map[slug]
  debugLog(debug.fetchPosts, 'Fetching home page with slug: ' + slug + ' and id: ' + id);

  const post = await fetchArticleById(id)
  return post
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const page = await getPageFromParams({ params })
  try {
    return {
      title: await createPageTitle(page.title || ''),
      description: capitalize(page.meta_description || ''),
    }
  } catch (error) {

    return <NotFound />
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  if ((await params).slug === "home") {

    const homePage = await getHomePageFromParams()
    const settings = await fetchSiteSettings()

    if (homePage) return (
      <PreHomePage
        settings={settings}
        pageProps={homePage}
      >

        <HtmlRenderer html={homePage.html_content} cssContent={homePage.css_content} />
      </PreHomePage>
    )
  } else {
    const page = await getPageFromParams({ params })

    if (page) return (
      <PrePage page={page}>
        <HtmlRenderer html={page.html_content} cssContent={page.css_content} />
      </PrePage>
    )

    if (!page) {
      const post = await getPostFromParams({ params })

      if (post) return (
        <PrePost post={post.post}>
          <HtmlRenderer html={post.post.html_content} cssContent={post.post.css_content} />
        </PrePost>
      )
      else return <NotFound />
    }

  }
}
