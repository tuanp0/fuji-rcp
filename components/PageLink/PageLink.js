import React from 'react'
import Link from 'next/link'

import styles from './PageLink.module.scss'


const PageLink = ({ title, text, link, color }) => {
  return (
    <section
      className={`
        ${styles.pagelink}
        ${color === 'brown' && styles.brown}
        ${color === 'darkblue' && styles.darkblue}
      `}>
        <Link href={link} title={title} className={styles.pagelinkLink}>
          <div className={styles.pagelinkContent}>
            <h2 className={styles.pagelinkTitle} dangerouslySetInnerHTML={{ __html: title }} />
            <div className={styles.pagelinkText} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <span className={styles.pagelinkBtn} >En savoir plus</span>
        </Link>
    </section>
  )
}

export default PageLink