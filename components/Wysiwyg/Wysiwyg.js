import React from 'react'
import { Container } from '@components/Container'

import styles from './Wysiwyg.module.scss'

const Wysiwyg = ({title, subtitle, description}) => {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.wysiwyg}>
          <h1 dangerouslySetInnerHTML={{__html: title}} />
          <p dangerouslySetInnerHTML={{__html: subtitle}}/>
          <div dangerouslySetInnerHTML={{__html: description}}/>
        </div>
      </Container> 
    </section>
  )
}

export default Wysiwyg