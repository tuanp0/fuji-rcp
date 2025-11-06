import recipes from '@data/recipes'

export const dynamic = 'force-static'

const sitemap = () => {
  const baseUrl = 'https://fuji.tuanphung.com'
  
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/recipe-installation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recipe-comparateur`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const recipeRoutes = recipes.map((recipe) => ({
    url: `${baseUrl}/${recipe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...recipeRoutes]
}

export default sitemap