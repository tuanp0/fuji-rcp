import React from 'react'

import { HomeSlider } from '@components/HomeSlider'
import styles from './Intro.module.scss'

const intro = () => {
  return (
    <section className={styles.intro}>
        {/* <div className={styles.introContent}>
          <div className={styles.introText}>
            <ul>
              <li>Contenu repris de fujiXweekly et filmsimulations</li>
              <li>Utiliser visuels perso - WIP</li>
              <li>Offline version - WIP ?</li>
            </ul>
          </div>
        </div> */}
        <HomeSlider />
    </section>
  )
}

export default intro