import styles from './Header.module.scss'
import {Container} from '@components/Container'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <h1 className={styles.title}>
          fuji 
          <span className={styles.walter}>Recipes</span>
        </h1>
      </Container>
    </header>
  )
}

export default Header