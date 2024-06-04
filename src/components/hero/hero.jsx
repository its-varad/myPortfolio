import React from 'react'
import { getimageUrl } from '../../util'
import styles from './hero.module.css'
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Varad</h1>
        <p className={styles.description}>I'm a Full-Stack developer.</p>
        <a href='mailto:varadraskar21@gmail.com' className={styles.contactBtn}>Contact Me</a></div>
        <img src = {getimageUrl("hero/heroImage.png")} alt='hero image of me' className={styles.heroImg}></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
       
  </section>
}


