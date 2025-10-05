import React from 'react'
import { Container } from '@components/Container'

import styles from './Title.module.scss'

const Title = ({title}) => {
  return (
    <div className={styles.title}>
      <Container className={styles.container}>
        <h1 className={styles.titleText}>{title}</h1>
      </Container>
    </div>
  )
}

export default Title