'use client'
import React, { useState, useRef, useEffect, useMemo } from 'react'
import {Container} from '@components/Container'
import {RecipeFilter} from '@/components/RecipeFilter'
import {Card} from '@components/Card'

import styles from './ListCard.module.scss'

const ListCard = ({recipes}) => {
  const [orderFilter, setOrderFilter] = useState('')
  const [colorFilter, setColorFilter] = useState('')
  const [styleFilter, setStyleFilter] = useState('')
  const [showReset, setShowReset] = useState(false)

  const filteredRecipes = useMemo(() => {
    let result = [...recipes]

    if(orderFilter === 'nalpha' || colorFilter !== '' || styleFilter !== '') {
      setShowReset(true)
    } else {
      setShowReset(false)
    }

    if (colorFilter) {
      result = result.filter(recipe => {
        return recipe.tags && recipe.tags.includes(colorFilter)
      })
    }

    if (styleFilter) {
      result = result.filter(recipe => {
        return recipe.tags && recipe.tags.includes(styleFilter)
      })
    }

    if (orderFilter === 'alpha') {
      result.sort((a, b) => a.title.localeCompare(b.title, 'fr'))
    } else if (orderFilter === 'nalpha') {
      result.sort((a, b) => b.title.localeCompare(a.title, 'fr'))
    }

    return result
  }, [recipes, orderFilter, colorFilter, styleFilter])

  return (
    <section className={styles.listcard}>
      <Container className={styles.container}>
        <h2 className={styles.listcardTitle}>Liste de Recipes pour Fujifilm X-Trans V</h2>
        <RecipeFilter
          orderFilter={orderFilter}
          setOrderFilter={setOrderFilter}
          colorFilter={colorFilter}
          setColorFilter={setColorFilter}
          styleFilter={styleFilter}
          setStyleFilter={setStyleFilter}
          filteredRecipes={filteredRecipes}
          showReset={showReset}
        />
        
        {filteredRecipes.length > 0 ? (
          <div className={styles.listcardGlobal}>
            {filteredRecipes.map((recipe, index) => {
              return (
                <Card link={recipe.slug} title={recipe.title} images={recipe.images} recipe={recipe} key={index}/>
              )
            })}
          </div>
        ) : (
          <p className={styles.noResults}>Aucune recipe trouvée avec ces filtres.</p>
        )}
      </Container>
    </section>
  )
}

export default ListCard