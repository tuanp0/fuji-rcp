import { Container } from '@components/Container'
// import { Title } from '@components/Title'
import { RecipeSlider } from '@components/RecipeSlider'
import { RecipeSettings } from '@components/RecipeSettings'

import styles from './RecipeContent.module.scss'

const RecipePage = async ({title, images, settings}) => {
  return (
    <section className={styles.recipe}>
      <Container className={styles.container}>
        <RecipeSlider images={images} title={title} />
        <RecipeSettings settings={settings} />
      </Container>
    </section>
  )
}

export default RecipePage