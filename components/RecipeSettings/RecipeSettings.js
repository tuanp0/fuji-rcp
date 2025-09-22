"use client"
import React, { useState } from 'react'

import styles from './RecipeSettings.module.scss'

const RecipeSettings = ({settings}) => {
    const [done, setDone] = useState([])

    const handleActive = (indexKey) => {
        setDone(prev => 
            prev.includes(indexKey) 
            ? prev.filter(item => item !== indexKey)
            : [...prev, indexKey]
        );
    }

    return (
        <div className={styles.settings}>
            <h2 className={styles.settingsTitle}>Réglages</h2>

            <div className={styles.settingsList}>
                {settings.map((settingObj, objIndex) => 
                    Object.entries(settingObj).map(([key, value], index) => {
                        const indexKey = `${objIndex}-${index}`;
                        const isDone = done.includes(indexKey);

                        return (
                            <div
                                onClick={() => handleActive(indexKey)}
                                className={`${styles.settingsItem} ${isDone ? styles.done: ''}`}
                                key={indexKey}
                            >
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