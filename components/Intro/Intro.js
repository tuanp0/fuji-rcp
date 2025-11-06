import React from 'react'
import Container from '@components/Container'

import styles from './Intro.module.scss'

const intro = ({ text }) => {
  return (
    <section className={styles.intro}>
      <Container className={styles.container}>
        <div className={styles.introText} dangerouslySetInnerHTML={{__html: text.text}} />
      </Container>
    </section>
  )
}

export default intro