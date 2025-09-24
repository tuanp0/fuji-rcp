import React from 'react'
import { Container } from '@components/Container'

import styles from './Text.module.scss'

const Text = ({ text }) => {
  return (
    <section>
      <Container className={styles.container}>
        <h3 className={styles.textTitle}>Style</h3>
        <div className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
      </Container>
    </section>
  )
}

export default Text