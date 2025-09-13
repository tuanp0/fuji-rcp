import Link from "next/link";

import styles from './Card.module.scss'

const Card = ({link, title}) => {
  return (
    <div className={styles.card}>
        <Link href={link}>
            Card -
            {title}
        </Link>
    </div>
  )
}

export default Card