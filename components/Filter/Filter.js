'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'

import styles from './Filter.module.scss'

const Filter = ({
    orderFilter,
    setOrderFilter,
    colorFilter,
    setColorFilter
}) => {
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState(0);
    const filterRef = useRef(null);

    const toggleOpen = () => {
        setHeight(open ? 0 : filterRef.current.scrollHeight);
        setOpen(!open);
    };

    return (
        <div className={styles.filter}>
            <button
                onClick={() => toggleOpen()}
                className={styles.filterBtn}
            >
                <Image
                    src={'filter.svg'}
                    width={40}
                    height={40}
                    alt={'Filtre de recipe'}
                    className={styles.filterBtnIcon}
                />
            </button>
            <div
                className={`${styles.filterContent} ${open ? styles.opened : ''}`}
                style={{ height: height+'px' }}
                ref={filterRef}
            >
                <div className={styles.filterItem}>
                    <select
                        name="order"
                        id="order-select"
                        value={orderFilter}
                        onChange={(e) => setOrderFilter(e.target.value)}
                        className={styles.filterSelect}
                    >
                        <option value="" disabled>--Ordre--</option>
                        <option value="alpha">A -&gt; Z</option>
                        <option value="nalpha">Z -&gt; A</option>
                    </select>
                </div>
                <div className={styles.filterItem}>
                    <select
                        name="color"
                        id="color-select"
                        value={colorFilter}
                        onChange={(e) => setColorFilter(e.target.value)}
                        className={styles.filterSelect}
                    >
                        <option value="" disabled>--Couleur--</option>
                        <option value="orange">Orange</option>
                        <option value="blue">Bleu</option>
                        <option value="vert">Vert</option>
                        <option value="bn">Noir & Blanc</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter