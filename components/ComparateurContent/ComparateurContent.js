'use client'
import recipes from '@data/recipes'
import photoName from '@data/photoName'
import simulation from '@data/simulation'

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RecipeFilter } from '@components/RecipeFilter'
import { Container } from '@components/Container'
import { Back } from '@components/Back'

import styles from './ComparateurContent.module.scss'

const ComparateurContent = () => {
  const [colorComparateurFilter, setColorComparateurFilter] = useState('')
  const [styleComparateurFilter, setStyleComparateurFilter] = useState('')
  const [simulationComparateurFilter, setSimulationComparateurFilter] = useState('')
  const [showComparateurReset, setShowComparateurReset] = useState(false)

  const uniquePrefixes = useMemo(() => {
    const prefixes = new Set()
    
    recipes.forEach(recipe => {
      recipe.images.forEach(image => {
        const filename = image.src.split('/').pop()
        const match = filename.match(/^(\d+)-/)
        if (match) {
          prefixes.add(match[1]);
        }
      })
    })
    
    return Array.from(prefixes).sort((a, b) => parseInt(a) - parseInt(b))
  }, [])

  const [selectedPrefix, setSelectedPrefix] = useState(
    uniquePrefixes.includes('1') ? '1' : ''
  );

  useEffect(() => {
    if (colorComparateurFilter !== '' || styleComparateurFilter !== '' || simulationComparateurFilter !== '') {
      setShowComparateurReset(true)
    } else {
      setShowComparateurReset(false)
    }
  }, [colorComparateurFilter, styleComparateurFilter, simulationComparateurFilter])

  const filteredImages = useMemo(() => {
    if (!selectedPrefix) return []
    
    let results = []
    recipes.forEach(recipe => {
      recipe.images.forEach(image => {
        const filename = image.src.split('/').pop()
        if (filename.startsWith(`${selectedPrefix}-`)) {
          results.push({
            recipe: recipe.title,
            link: recipe.slug,
            simulation: recipe.settings[0]["Film simulation"],
            desc: recipe.shortDesc,
            src: image.src,
            tags: recipe.tags
          })
        }
      })
    })

    if (colorComparateurFilter) {
      results = results.filter(item => {
        return item.tags && item.tags.includes(colorComparateurFilter)
      })
    }

    if (styleComparateurFilter) {
      results = results.filter(item => {
        return item.tags && item.tags.includes(styleComparateurFilter)
      })
    }

    if (simulationComparateurFilter) {
      results = results.filter(item => {
        return item.tags && item.tags.includes(simulationComparateurFilter)
      })
    }

    return results
  }, [selectedPrefix, colorComparateurFilter, styleComparateurFilter, simulationComparateurFilter])
  
  return (
    <section className={styles.comparateur}>
      <Container className={styles.comparateurContainer}>
        <Back link={`/`} noContainer />
        <h1 className={styles.comparateurTitle}>Comparateur de recipe</h1>
        <h2 className={styles.comparateurSubtitle}>Choix de la photo</h2>
        <select
          value={selectedPrefix}
          onChange={(e) => setSelectedPrefix(e.target.value)}
          className={styles.comparateurSelect}
        >
          <option value="">Choisir une photo</option>
          {uniquePrefixes.map(prefix => (
            <option key={prefix} value={prefix}>{prefix} - {photoName[prefix]}</option>
          ))}
        </select>

        <RecipeFilter
          colorFilter={colorComparateurFilter}
          setColorFilter={setColorComparateurFilter}
          styleFilter={styleComparateurFilter}
          setStyleFilter={setStyleComparateurFilter}
          simulationFilter={simulationComparateurFilter}
          setSimulationFilter={setSimulationComparateurFilter}
          showReset={showComparateurReset}
        />

        {filteredImages.length > 0 ? (
            <div className={styles.comparateurResults}>
              <h2 className={styles.comparateurSubtitle}>Liste de photos</h2>
              <div className={styles.comparateurGlobal}>
                {filteredImages.map((item, idx) => (
                  <Link href={item.link} key={idx} className={styles.comparateurSolo}>
                    <Image src={item.src} alt={``} width={1100} height={733} className={styles.comparateurSoloImg} />
                    <div className={styles.comparateurSoloContent}>
                      <div className={styles.comparateurSoloInfo}>
                        <h3 className={styles.comparateurSoloTitle}>{item.recipe}</h3>
                        <Image src={simulation[item.simulation]} alt={item.simulation} width={640} height={640} className={styles.comparateurSoloSimulation}/>
                      </div>
                      <div className={styles.comparateurSoloDesc} dangerouslySetInnerHTML={{__html: item.desc}} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <p className={styles.noResults}>Aucune recipe trouvée avec ces filtres.</p>
          )}
      </Container>
    </section>
  )
}

export default ComparateurContent