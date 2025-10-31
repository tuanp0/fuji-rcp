'use client'
import Link from 'next/link'
import {Container} from '@components/Container'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerFirst}>
          <nav className={styles.footerNav}>
            <ul className={styles.footerUl}>
              <li className={styles.footerLi}><Link href={`/recipe-comparateur`} className={styles.footerLink}>Comparateur de recipe</Link></li>
              <li className={styles.footerLi}><Link href={`/recipe-installation`} className={styles.footerLink}>Installation de recipe</Link></li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerSecond}>
          <p className={styles.footerParagraph}>Contenus repris depuis les sites suivants :</p>
          <p className={styles.footerParagraph}>
              <a href="https://fujixweekly.com/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">Fuji X Weekly</a> -&nbsp;
              <a href="https://www.shuttergroove.com/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">ShutterGroove</a> -&nbsp;
              <a href="https://film.recipes/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">Film Recipes</a> -&nbsp;
              <a href="https://fujifilmsimulations.com/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">Fujifilm Simulations</a>
            </p>
        </div>
        <div className={styles.footerCopyright}>© 2025 - TP</div>
      </Container>
    </footer>
  )
}

export default Footer