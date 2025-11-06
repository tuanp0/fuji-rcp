export const dynamic = 'force-static'

const robots = () => {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://fuji.tuanphung.com/sitemap.xml',
  }
}

export default robots