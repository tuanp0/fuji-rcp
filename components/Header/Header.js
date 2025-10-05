'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {Container} from '@components/Container'

import styles from './Header.module.scss'

const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className={`${styles.header} ${isHome ? styles.homepage : ''}`}>
      <Container className={styles.container}>
        {isHome ? (
            <h1 className={styles.headerTitle}>
              <Link href={`/`}>
                fuji 
                <span className={styles.headerSecond}>Recipes</span>
              </Link>
            </h1>
        ) : (
            <p className={styles.headerTitle}>
              <Link href={`/`}>
                fuji 
                <span className={styles.headerSecond}>Recipes</span>
              </Link>
            </p>
        )}
      </Container>
    </header>
  )
}

export default Header