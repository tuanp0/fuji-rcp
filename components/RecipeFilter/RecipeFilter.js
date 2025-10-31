'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

import styles from './RecipeFilter.module.scss'

const RecipeFilter = ({
    orderFilter,
    setOrderFilter,
    colorFilter,
    setColorFilter,
    styleFilter,
    setStyleFilter,
    simulationFilter,
    setSimulationFilter,
    showReset
}) => {
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState(0)
    const filterRef = useRef(null)

    const toggleOpen = () => {
        setHeight(open ? 0 : filterRef.current.scrollHeight)
        setOpen(!open)
    }

    const resetFilters = () => {
        setOrderFilter('alpha')
        setColorFilter('')
        setStyleFilter('')
        setSimulationFilter('')
    }

    return (
        <div className={styles.filter}>

            <div className={styles.filterBtns}>
                <button
                    onClick={() => toggleOpen()}
                    className={styles.filterBtn}
                >
                    <span className={styles.filterBtnText}>Filtres</span>
                    <Image
                        src={'filter.svg'}
                        width={40}
                        height={40}
                        alt={'Filtre de recipe'}
                        className={styles.filterBtnIcon}
                    />
                </button>
                {showReset &&
                    <button
                        onClick={() => resetFilters()}
                        className={`${styles.filterBtn} ${styles.reset}`}
                    >
                        <span className={styles.filterBtnText}>Réinitialiser les filtres</span>
                        <Image
                            src={'cross.svg'}
                            width={40}
                            height={40}
                            alt={'Filtre de recipe'}
                            className={styles.filterBtnIcon}
                        />
                    </button>
                }
            </div>
            
            <div
                className={`${styles.filterContent} ${open ? styles.opened : ''}`}
                style={{ height: height+'px' }}
                ref={filterRef}
            >
                <div className={styles.filterGlobal}>
                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel} htmlFor="order-select">Ordre</label>
                        <select
                            name="order"
                            id="order-select"
                            value={orderFilter}
                            onChange={(e) => setOrderFilter(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="alpha">De A à Z</option>
                            <option value="nalpha">De Z à A</option>
                        </select>
                    </div>
                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel} htmlFor="color-select">Couleur</label>
                        <select
                            name="color"
                            id="color-select"
                            value={colorFilter}
                            onChange={(e) => setColorFilter(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="">Tous</option>
                            <option value="orange">Orange</option>
                            <option value="blue">Bleu</option>
                            <option value="green">Vert</option>
                            <option value="night">Nuit</option>
                            <option value="bw">Noir & Blanc</option>
                        </select>
                    </div>
                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel} htmlFor="style-select">Style</label>
                        <select
                            name="style"
                            id="style-select"
                            value={styleFilter}
                            onChange={(e) => setStyleFilter(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="">Tous</option>
                            <option value="soft">Doux</option>
                            <option value="saturated">Saturé</option>
                        </select>
                    </div>
                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel} htmlFor="simulation-select">Simulation</label>
                        <select
                            name="simulation"
                            id="simulation-select"
                            value={simulationFilter}
                            onChange={(e) => setSimulationFilter(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="">Tous</option>
                            <option value="acros">Acros</option>
                            <option value="classic-chrome">Classic Chrome</option>
                            <option value="classic-negative">Classic Negative</option>
                            <option value="eterna">Eterna</option>
                            <option value="eterna-bleach-bypass">Eterna Bleach Bypass</option>
                            <option value="monostd">Monochrome</option>
                            <option value="nostalgic-negative">Nostalgic Negative</option>
                            <option value="pro-neg-hi">Pro Negative High</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeFilter