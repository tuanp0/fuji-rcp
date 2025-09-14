import recipes from '@lib/recipes'

import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { RecipeContent } from '@components/RecipeContent'
import { Text } from '@components/Text'

const RecipePage = async ({ params }) => {
  const { slug } = await params;

  const recipe = recipes.find((element) => element.slug === slug);
    console.log(recipe)
  return (
    <main>
      <Title title={recipe.title} />
      <RecipeContent images={recipe.images} settings={recipe.settings}/>
      <Text text={recipe.description} />
    </main>
  )
}

export default RecipePage;