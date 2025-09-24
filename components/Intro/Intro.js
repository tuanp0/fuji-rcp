import React from 'react'

import { HomeSlider } from '@components/HomeSlider'
import styles from './Intro.module.scss'

const intro = () => {
  return (
    <div className={styles.intro}>
        <div className={styles.introContent}>
          <div className={styles.introText}>
            <h1 className={styles.introTitle}>
              fuji 
              <span className={styles.introSecond}>Recipes</span>
            </h1>
            <ul>
              <li>{"Swiper sur les cards de la liste pour voir les autres images"}</li>
              <li>{"Cliquer sur les différents settings sur la page détail du recipe pour se rappeler qu'il a été déjà configuré sur l'appareil photo"}</li>
              <li>Contenu repris de fujiXweekly et filmsimulations</li>
              <li>Utiliser visuels perso - WIP</li>
              <li>Offline version - WIP ?</li>
            </ul>
          </div>
        </div>
        <HomeSlider />
    </div>
  )
}

export default intro