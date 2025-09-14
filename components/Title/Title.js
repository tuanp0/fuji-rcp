import React from 'react'
import { Container } from '@components/Container'

import styles from './Title.module.scss'

const Title = ({title}) => {
  return (
    <Container>
      <h1 className={styles.title}>{title}</h1>
    </Container>
  )
}

export default Title