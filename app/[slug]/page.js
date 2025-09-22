import recipes from '@lib/recipes'

import { Title } from '@components/Title'
import { RecipeContent } from '@components/RecipeContent'
import { Text } from '@components/Text'

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

const RecipePage = ({ params }) => {
  const { slug } = params
  const recipe = recipes.find((element) => element.slug === slug)

  if (!recipe) {
    return <main><h1>Recipe not found</h1></main>
  }

  return (
    <main>
      <Title title={recipe.title} />
      <RecipeContent images={recipe.images} settings={recipe.settings}/>
      <Text text={recipe.description} />
    </main>
  )
}

export default RecipePage