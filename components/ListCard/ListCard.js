import {Container} from '@components/Container'

import styles from './ListCard.module.scss'

const ListCard = ({children}) => {
  return (
    <section className={styles.listcard}>
      <Container className={styles.container}>
        <h2 className={styles.listcardTitle}>Liste de Recipes pour Fujifilm X-Trans V</h2>
        {children}
      </Container>
    </section>
  )
}

export default ListCard