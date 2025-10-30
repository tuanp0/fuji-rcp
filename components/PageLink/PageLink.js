import React from 'react'
import Link from 'next/link'

// import { Container } from '@components/Container'

import styles from './PageLink.module.scss'


const PageLink = ({ title, text, link, color }) => {
  return (
    <section
      className={`
        ${styles.pagelink}
        ${color === 'brown' && styles.brown}
        ${color === 'darkblue' && styles.darkblue}
      `}>
        <Link href={link} className={styles.pagelinkLink}>
          <h2 className={styles.pagelinkTitle} dangerouslySetInnerHTML={{ __html: title }} />
          <div className={styles.pagelinkText} dangerouslySetInnerHTML={{ __html: text }} />
          <span className={styles.pagelinkBtn} >En savoir plus</span>
        </Link>
    </section>
  )
}

export default PageLink