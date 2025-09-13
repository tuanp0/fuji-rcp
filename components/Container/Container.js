import React from 'react'
import styles from './Container.module.scss'

const Container = ({children, className}) => {
  return (
    <div className={`${styles.Container} ${className}`}>
        {children}
    </div>
  )
}

export default Container