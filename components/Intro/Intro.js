import React from 'react'

import styles from './Intro.module.scss'

const intro = () => {
  return (
    <div className={styles.intro}>
        <h2 className={styles.introTitle}>Liste de Recipes pour Fujifilm X-Trans V</h2>
        <div className={styles.introContent}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur et augue auctor nisl efficitur scelerisque vel sit amet ex.
                Integer lacinia orci ligula, sit amet ultricies velit ornare eu.
                Proin finibus efficitur magna, eget gravida ligula mattis eget.
                In fringilla eros nec justo cursus volutpat.
                Fusce leo tellus, mattis quis convallis eu, eleifend ullamcorper tellus.
                Aliquam fringilla neque sed ligula suscipit ultrices.
                Aenean tellus nunc, ultricies ut sollicitudin vel, volutpat pulvinar mi.
                Etiam vel ligula efficitur ex viverra luctus.
            </p>
            <p>Pellentesque congue rhoncus erat, eu lobortis mi cursus laoreet.
                Etiam imperdiet erat et neque aliquet, sagittis ullamcorper sapien tempor.
                Aliquam erat volutpat. Suspendisse ultrices enim quis tincidunt ullamcorper.
                Integer felis risus, placerat in lacinia in, malesuada vel erat.
                Sed dignissim massa magna, eget auctor magna placerat vel.
                Nullam libero tortor, auctor sed erat id, pulvinar ultrices ligula.
                Vivamus in viverra erat. Donec sapien arcu, viverra sed volutpat non, interdum vel ipsum.
                In eu ullamcorper sapien, vel condimentum diam.
            </p>
        </div>
    </div>
  )
}

export default intro