'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Container from '@components/Container'

import styles from './Back.module.scss'

const Back = ({ noContainer, link }) => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className={styles.back}>
        {noContainer ? (
            <button onClick={handleGoBack} className={styles.backLink}>
                <Image src={`/left-arrow.svg`} alt={`Retour`} width={32} height={24} className={styles.backImg} />
                <span className={styles.backText}>Retour</span>
            </button>
        ) : (
            <Container className={styles.container}>
                <button onClick={handleGoBack} className={styles.backLink}>
                    <Image src={`/left-arrow.svg`} alt={`Retour`} width={32} height={24} className={styles.backImg} />
                    <span className={styles.backText}>Retour</span>
                </button>
            </Container>
        )}
    </div>
  )
}

export default Back