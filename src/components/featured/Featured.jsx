import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> Schedio.Studio! </b> Discover the stories and creative ideas</h1>  
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, maxime. Quas quos voluptatibus, modi iure officia assumenda fuga iusto laborum! Optio voluptatem obcaecati aliquam nobis nam minus ratione placeat architecto!
            </p>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
    </div>
  )
}

export default Featured