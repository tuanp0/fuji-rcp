'use client'
import React, { useState, useRef } from 'react'
import { Container } from '@components/Container'

import styles from './DropdownText.module.scss'

const DropdownText = ({ title, subtitle, description }) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(30);
  const descriptionRef = useRef(null);

  const toggleOpen = () => {
    setHeight(open ? 30 : descriptionRef.current.scrollHeight);
    setOpen(!open);
  };

  return (
    <section className={styles.dropdowntext}>
        <Container>
            <h2 className={styles.title}  dangerouslySetInnerHTML={{ __html: title }} />
            <p className={styles.subtitle}  dangerouslySetInnerHTML={{ __html: subtitle }} />
            <div
                style={{ height: height+'px' }}
                className={`${styles.description} ${open ? styles.opened : ''}`}
                dangerouslySetInnerHTML={{ __html: description }}
                ref={descriptionRef}
            />
            <div
                onClick={() => toggleOpen()}
                className={`${styles.arrow}  ${open ? styles.opened : ''}`}
            ></div>
        </Container>
    </section>
  )
}

export default DropdownText