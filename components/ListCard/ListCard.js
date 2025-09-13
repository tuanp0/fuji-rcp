import {Container} from '@components/Container'

import styles from './ListCard.module.scss'

const ListCard = ({children}) => {
  return (
    <section className={styles.listCard}>
      <Container className={styles.container}>
        {children}
      </Container>
    </section>
  )
}

export default ListCard