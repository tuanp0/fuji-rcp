'use client'
import React, { useState, useRef, useEffect, useMemo } from 'react'
import {Container} from '@components/Container'
import {RecipeFilter} from '@/components/RecipeFilter'
import {Card} from '@components/Card'

import styles from './ListCard.module.scss'

const ListCard = ({recipes}) => {
  const [orderFilter, setOrderFilter] = useState('alpha')
  const [colorFilter, setColorFilter] = useState('')
  const [styleFilter, setStyleFilter] = useState('')
  const [simulationFilter, setSimulationFilter] = useState('')
  const [showReset, setShowReset] = useState(false)

  const filteredRecipes = useMemo(() => {
    let results = [...recipes]

    if(orderFilter !== 'alpha' || colorFilter !== '' || styleFilter !== '' || simulationFilter !== '') {
      setShowReset(true)
    } else {
      setShowReset(false)
    }

    if (colorFilter) {
      results = results.filter(recipe => {
        return recipe.tags && recipe.tags.includes(colorFilter)
      })
    }

    if (styleFilter) {
      results = results.filter(recipe => {
        return recipe.tags && recipe.tags.includes(styleFilter)
      })
    }

    if (simulationFilter) {
      results = results.filter(recipe => {
        return recipe.tags && recipe.tags.includes(simulationFilter)
      })
    }

    if (orderFilter === 'alpha') {
      results.sort((a, b) => a.title.localeCompare(b.title, 'fr'))
    } else if (orderFilter === 'nalpha') {
      results.sort((a, b) => b.title.localeCompare(a.title, 'fr'))
    }

    return results
  }, [recipes, orderFilter, colorFilter, styleFilter, simulationFilter])

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
          simulationFilter={simulationFilter}
          setSimulationFilter={setSimulationFilter}
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