'use client'
import React, { useState, useRef, useEffect } from 'react'
import {Container} from '@components/Container'
import {Filter} from '@components/Filter'
import {Card} from '@components/Card'

import styles from './ListCard.module.scss'

const ListCard = ({recipes}) => {
  const [orderFilter, setOrderFilter] = useState('')
  const [colorFilter, setColorFilter] = useState('')

  useEffect(() => {
    console.log(orderFilter, colorFilter)
  }, [orderFilter, colorFilter])

  return (
    <section className={styles.listcard}>
      <Container className={styles.container}>
        <h2 className={styles.listcardTitle}>Liste de Recipes pour Fujifilm X-Trans V</h2>
        <Filter
          orderFilter={orderFilter}
          setOrderFilter={setOrderFilter}
          colorFilter={colorFilter}
          setColorFilter={setColorFilter}
        />
        
        {recipes.map((recipe, index) => {
          return (
            <Card link={recipe.slug} title={recipe.title} images={recipe.images} recipe={recipe} key={index}/>
          )
        })}
      </Container>
    </section>
  )
}

export default ListCard