import { Container } from '@components/Container'
import { Slider } from '@components/Slider'
import { RecipeSettings } from '@components/RecipeSettings'

import styles from './RecipeContent.module.scss'

const RecipePage = async ({images, settings}) => {
  return (
    <section className={styles.recipe}>
      <Container className={styles.container}>
        <Slider images={images} />
        <RecipeSettings settings={settings} />
      </Container>
    </section>
  )
}

export default RecipePage;