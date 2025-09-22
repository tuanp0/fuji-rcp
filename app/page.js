export const revalidate = false;
import recipes from '@lib/recipes'

import {Intro} from '@components/Intro'
import {ListCard} from '@components/ListCard'
import {Container} from '@components/Container'
import {Card} from '@components/Card'

export default async function Home() {
  return (
    <>
      <Intro />
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
