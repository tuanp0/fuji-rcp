export const revalidate = false
import intro from '@data/intro'
import recipeComp from '@data/recipeComp'
import recipes from '@data/recipes'
import recipeInstall from '@data/recipeInstall'

import {Container} from '@components/Container'
import {HomeSlider} from '@components/HomeSlider'
import {Intro} from '@components/Intro'
import {PageLink} from '@/components/PageLink'
import {ListCard} from '@components/ListCard'

import styles from './page.module.scss'

export default async function Home() {

  return (
    <>
      <HomeSlider />
      <Intro text={intro} />
      <section className={styles.blocs}>
        <Container className={styles.blocsContainer}>
          <PageLink title={recipeComp.title} text={recipeComp.text} link={recipeComp.link} color={`brown`} />
          <PageLink title={recipeInstall.title} text={recipeInstall.text} link={recipeInstall.link} color={`darkblue`} />
        </Container>
      </section>
      <ListCard recipes={recipes} />
      {/* <DropdownText title={howTo.title} subtitle={howTo.subtitle} description={howTo.description} /> */}
    </>
  )
}
