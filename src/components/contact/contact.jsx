import React from 'react'
import styles from './contact.module.css'
import { getimageUrl } from '../../util'
export const Contact = () => {
  return <footer id='contacts' className={styles.container}>
    <div className={styles.text}><h1 className={styles.title}>Contact</h1>
    <p className={styles.description}>Feel free to Reach out on</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}><img src={getimageUrl("contact/emailIcon.png")} alt='emailIcon'/><a href="mailto:varadraskar21@gmail.com"/>varadraskar21@gmail.com</li>
        <li className={styles.link}><img src={getimageUrl("contact/linkedinIcon.png")} alt='linkedinIcon'/><a href="https://www.linkedin.com"/>linkedin.com/varad</li>
        <li className={styles.link}><img src={getimageUrl("contact/githubIcon.png")} alt='githubIcon'/><a href="https://www.github.com"/>github.com/varad</li>


    </ul>
    
  </footer>
}


