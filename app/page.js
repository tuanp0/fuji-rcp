export const revalidate = false;
import recipes from '@/data/recipes'
import howTo from '@/data/howTo'

import {Intro} from '@components/Intro'
import {ListCard} from '@components/ListCard'
import {Container} from '@components/Container'
import { DropdownText } from '@/components/DropdownText';
import {Card} from '@components/Card'

export default async function Home() {

  return (
    <>
      <Intro />
      <DropdownText title={howTo.title} subtitle={howTo.subtitle} description={howTo.description} />
      <ListCard>
          {recipes.map((recipe, index) => {
            return (
              <Card link={recipe.slug} title={recipe.title} images={recipe.images} recipe={recipe} key={index}/>
            )
          })}
      </ListCard>
    </>
  );
}
