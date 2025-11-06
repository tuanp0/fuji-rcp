import recipes from '@data/recipes'

import RecipeContent from '@components/RecipeContent'
import Text from '@components/Text'

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

const RecipePage = async ({ params }) => {
  const { slug } = await params
  const recipe = recipes.find((element) => element.slug === slug)

  if (!recipe) {
    return (
      <main>
        <h1>Recipe not found</h1>
      </main>
    )
  }

  return (
    <main>
      <RecipeContent title={recipe.title} images={recipe.images} settings={recipe.settings}/>
      <Text text={recipe.description} />
    </main>
  )
}

export default RecipePage