import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@components/Container'

import styles from './Back.module.scss'

const Back = ({ noContainer, link }) => {
  return (
    <div className={styles.back}>
        {noContainer ? (
            <Link href={link} className={styles.backContent}>
                <Image src={`/left-arrow.svg`} alt={`Retour`} width={32} height={24} className={styles.backImg} />
                <span className={styles.backText}>Retour</span>
            </Link>
        ) : (
            <Container className={styles.container}>
                <Link href={link} className={styles.backContent}>
                    <Image src={`/left-arrow.svg`} alt={`Retour`} width={32} height={24} className={styles.backImg} />
                    <span className={styles.backText}>Retour</span>
                </Link>
            </Container>
        )}
    </div>
  )
}

export default Back