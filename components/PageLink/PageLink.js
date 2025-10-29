import React from 'react'
import Link from 'next/link'

import { Container } from '@components/Container'

import styles from './PageLink.module.scss'


const PageLink = ({ title, text, link }) => {
  return (
    <section className={styles.pagelink}>
        <Container className={styles.container}>
            <div className={styles.pagelinkContent}>
                <h2 className={styles.pagelinkTitle} dangerouslySetInnerHTML={{ __html: title }} />
                <div className={styles.pagelinkText} dangerouslySetInnerHTML={{ __html: text }} />
                <Link href={link} className={styles.pagelinkLink} >En savoir plus</Link>
            </div>
        </Container>
    </section>
  )
}

export default PageLink