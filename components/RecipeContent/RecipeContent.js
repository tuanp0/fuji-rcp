import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { Slider } from '@components/Slider'
import { RecipeSettings } from '@components/RecipeSettings'

import styles from './RecipeContent.module.scss'

const RecipePage = async ({title, images, settings}) => {
  return (
    <section className={styles.recipe}>
      <Container className={styles.container}>
        <Title title={title} sticky />
        <Slider images={images} />
        <RecipeSettings settings={settings} />
      </Container>
    </section>
  )
}

export default RecipePage;