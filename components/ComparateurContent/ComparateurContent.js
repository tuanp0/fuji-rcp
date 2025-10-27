'use client'
import recipes from '@data/recipes'
import photoName from '@data/photoName'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@components/Container'

import styles from './ComparateurContent.module.scss'

const ComparateurContent = () => {
  
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

  const filteredImages = useMemo(() => {
    if (!selectedPrefix) return []
    
    const results = []
    recipes.forEach(recipe => {
      recipe.images.forEach(image => {
        const filename = image.src.split('/').pop()
        if (filename.startsWith(`${selectedPrefix}-`)) {
          results.push({
            recipe: recipe.title,
            link: recipe.slug,
            desc: recipe.shortDesc,
            src: image.src
          })
        }
      })
    })
    return results
  }, [selectedPrefix])
  

  return (
    <section className={styles.comparateur}>
      <Container className={styles.comparateurContainer}>
        <h2 className={styles.comparateurTitle}>Choix de la photo</h2>
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

        {filteredImages.length > 0 && (
            <div className={styles.comparateurResults}>
              <h2 className={styles.comparateurTitle}>Liste de Recipes</h2>
              <div className={styles.comparateurGlobal}>
                {filteredImages.map((item, idx) => (
                  <Link href={item.link} key={idx} className={styles.comparateurSolo}>
                    <Image src={item.src} alt={''} width={1100} height={733} className={styles.comparateurSoloImg} />
                    <h3 className={styles.comparateurSoloTitle}>{item.recipe}</h3>
                    <div className={styles.comparateurSoloDesc} dangerouslySetInnerHTML={{__html: item.desc}} />
                  </Link>
                ))}
              </div>
            </div>
          )}
      </Container>
    </section>
  )
}

export default ComparateurContent