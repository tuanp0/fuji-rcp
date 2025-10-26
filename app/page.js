export const revalidate = false
import recipes from '@/data/recipes'
import howTo from '@/data/howTo'

import {Intro} from '@components/Intro'
import {ListCard} from '@components/ListCard'
import { DropdownText } from '@/components/DropdownText'

export default async function Home() {

  return (
    <>
      <Intro />
      <DropdownText title={howTo.title} subtitle={howTo.subtitle} description={howTo.description} />
      <ListCard recipes={recipes} />
    </>
  )
}
