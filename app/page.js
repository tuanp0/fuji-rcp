// export const revalidate = false;
import {ListCard} from '@components/ListCard'
import {Container} from '@components/Container'
import {Card} from '@components/Card'

export default async function Home() {
  return (
    <>
      <ListCard>
          <Card link={`recipe/kodak-gold-200`} title={`Kodal Gold 200`} />
          <Card link={`recipe/fuji-200`} title={`Fujifilm 200`} />
          <Card link={`recipe/fuji-superia-xtra-400`} title={`Fujifilm Superia x-tra 400`} />
          <Card link={`recipe/kodak-ultramax-400`} title={`Kodak Ultramax 400`} />
      </ListCard>
    </>
  );
}
