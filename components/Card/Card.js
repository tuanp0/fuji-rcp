import Link from "next/link";
import Image from 'next/image'

import styles from './Card.module.scss'

const Card = ({link, title}) => {
  return (
    <div className={styles.card}>
        <Link href={link} className={styles.cardLink}>
            <div className={styles.cardImgcontainer}>
              <Image
                src="/cinematic-gold/cinematicgold-1.webp"
                width={500}
                height={500}
                alt={title}
                className={styles.cardImg}
              />
            </div>
            <div className={styles.cardContent}>
              {title}
            </div>
        </Link>
    </div>
  )
}

export default Card