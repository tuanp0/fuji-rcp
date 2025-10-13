'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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

        <a href={'https://tuanphung.com/'} target={'_blank'} className={styles.headerSite} rel="noopener noreferrer">
          <Image
            src={'/tp-logo.png'}
            width={192}
            height={192}
            alt={'Tuan Phung Logo'}
            className={styles.headerSiteImg}
          />
        </a>
      </Container>
    </header>
  )
}

export default Header