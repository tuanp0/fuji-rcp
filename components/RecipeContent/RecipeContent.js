import { Container } from '@components/Container'
import { Back } from '@components/Back'
import { RecipeSlider } from '@components/RecipeSlider'
import { RecipeSettings } from '@components/RecipeSettings'

import styles from './RecipeContent.module.scss'

const RecipePage = async ({title, images, settings}) => {
  return (
    <section className={styles.recipe}>
      <Back link={`/`} />
      <Container className={styles.container}>
        <div className={styles.recipeContent}>
          <RecipeSlider images={images} title={title} />
          <RecipeSettings settings={settings} />
        </div>
      </Container>
    </section>
  )
}

export default RecipePage