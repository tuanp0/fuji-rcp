import React from 'react'
import { Container } from '@components/Container'

import styles from './Text.module.scss'

const Text = ({ text }) => {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
      </Container>
    </section>
  )
}

export default Text