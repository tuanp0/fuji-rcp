'use client'
import footer from '@data/footer'

import Link from 'next/link'
import Image from 'next/image'
import Container from '@components/Container'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerFirst}>
          <div className={styles.footerDesc}>
            <p className={styles.footerDescTitle}>
              fuji <span className={styles.footerDescSubtitle}>Recipes</span>
            </p>
            <div className={styles.footerDescText} dangerouslySetInnerHTML={{__html: footer.desc}} />
          </div>
          <nav className={styles.footerNav}>
            <ul className={styles.footerUl}>
              <li className={styles.footerLi}><Link href={`/kodakgold-200`} className={styles.footerLink}>Kodak Gold 200</Link></li>
              <li className={styles.footerLi}><Link href={`/fujicolor-c200`} className={styles.footerLink}>Fujicolor C200</Link></li>
              <li className={styles.footerLi}><Link href={`/moodymetropolis-500t`} className={styles.footerLink}>Moody Metropolis 500T</Link></li>
            </ul>
            <ul className={styles.footerUl}>
              <li className={styles.footerLi}><Link href={`/recipe-comparateur`} className={styles.footerLink}>Comparateur de recipe</Link></li>
              <li className={styles.footerLi}><Link href={`/recipe-installation`} className={styles.footerLink}>Installation de recipe</Link></li>
              <li className={styles.footerLi}><Link href={`/plan-du-site`} className={styles.footerLink}>Plan du site</Link></li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerSecond}>
          <div className={styles.footerCredit} dangerouslySetInnerHTML={{__html: footer.credit}} />
          <p className={styles.footerCreditContent}>
            <a href="https://fujixweekly.com/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">Fuji X Weekly</a> -&nbsp;
            <a href="https://www.shuttergroove.com/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">ShutterGroove</a> -&nbsp;
            <a href="https://film.recipes/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">Film Recipes</a> -&nbsp;
            <a href="https://fujifilmsimulations.com/" target={'_blank'} className={styles.footerExternal} rel="noopener noreferrer">Fujifilm Simulations</a>
          </p>
          
        </div>
        <div className={styles.footerThird}>
          <div className={styles.footerCopyright}>© 2025 - TP</div>
          <div className={styles.footerDisclaimer} dangerouslySetInnerHTML={{__html: footer.disclaimer}} />
        </div>
      </Container>
    </footer>
  )
}

export default Footer