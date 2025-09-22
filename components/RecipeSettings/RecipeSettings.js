import React from 'react'

import styles from './RecipeSettings.module.scss'

const RecipeSettings = ({settings}) => {

  return (
    <div className={styles.settings}>
        <h2 className={styles.settingsTitle}>Réglages</h2>

        <div className={styles.settingsInfo}>
            {settings.map((settingObj, objIndex) => 
                Object.entries(settingObj).map(([key, value], index) => {
                    return (
                        <div className={styles.settingsItem} key={`${objIndex}-${index}`}>
                            <span className={styles.settingsName}>{key}</span>
                            <span className={styles.settingsValue} dangerouslySetInnerHTML={{__html: value}} />
                        </div>
                    )
                })
            )}
        </div>
    </div>
  )
}

export default RecipeSettings