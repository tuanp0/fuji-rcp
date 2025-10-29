export const revalidate = false
import intro from '@data/intro'
import recipeComp from '@data/recipeComp'
import recipes from '@data/recipes'
import howTo from '@data/howTo'

import {HomeSlider} from '@components/HomeSlider'
import {Intro} from '@components/Intro'
import {PageLink} from '@/components/PageLink'
import {ListCard} from '@components/ListCard'
import { DropdownText } from '@/components/DropdownText'

export default async function Home() {

  return (
    <>
      <HomeSlider />
      <Intro text={intro} />
      <PageLink title={recipeComp.title} text={recipeComp.text} link={recipeComp.link}/>
      <ListCard recipes={recipes} />
      <DropdownText title={howTo.title} subtitle={howTo.subtitle} description={howTo.description} />
    </>
  )
}
