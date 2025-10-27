"use client"
import simulations from '@data/simulation'
import React, { useState } from 'react'
import Image from 'next/image'

import styles from './RecipeSettings.module.scss'

const RecipeSettings = ({settings}) => {
    const [done, setDone] = useState([])

    const handleActive = (indexKey) => {
        setDone(prev => 
            prev.includes(indexKey) 
            ? prev.filter(item => item !== indexKey)
            : [...prev, indexKey]
        )
    }

    return (
        <div className={styles.settings}>
            <h2 className={styles.settingsTitle}>Réglages</h2>

            <div className={styles.settingsList}>
                {settings.map((settingObj, objIndex) => 
                    Object.entries(settingObj).map(([key, value], index) => {
                        const indexKey = `${objIndex}-${index}`
                        const isDone = done.includes(indexKey)

                        return (
                            <div
                                onClick={() => handleActive(indexKey)}
                                className={`
                                    ${styles.settingsItem}
                                    ${isDone ? styles.done: ''}
                                    ${key === 'Film simulation' ||
                                        key === 'Balance des blancs' ||
                                        key === 'Couleur Chrome' ||
                                        key === 'Couleur Chrome FX Bleue' ||
                                        key === 'ISO' ||
                                         key === 'Compensation Exp.'
                                        ? styles.half : styles.forth}
                                `}
                                key={indexKey}
                            >
                                {key === 'Film simulation' &&
                                    <Image src={simulations[value]} alt={value} width={640} height={640} className={styles.settingsSimulation}/>
                                }
                                <div className={styles.settingsText}>
                                    <p className={styles.settingsValue} dangerouslySetInnerHTML={{__html: value}} />
                                    <p className={styles.settingsName} dangerouslySetInnerHTML={{__html: key}} />
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default RecipeSettings