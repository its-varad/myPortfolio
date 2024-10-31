import React from 'react'
import { getimageUrl } from '../../util'
import styles from './hero.module.css'
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <div className={styles.jus}>
        <h1 className={styles.title}>Hi, I'm Varad</h1>
        <p className={styles.description}>I'm a Full-Stack developer.</p>
        </div>
    </div>
      <div className={styles.just}>
        <div className={styles.contentBtn}><a href='mailto:varadraskar21@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
      </div>
  </section>
}


