import React from 'react'
import styles from './about.module.css'
import { getimageUrl } from '../../util'
export const About = () => {
  return <section id="about" className={styles.container}>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
       
        <div className={styles.aboutItemText}>
            <h3>
                Front-end developer
            </h3>
            <p>
                I have developed multiple Front-end for websites based on genuine ideas which brought clean client side experiance. 
            </p>
        </div>
    </li>
    <li className={styles.aboutItem}>
       
        <div className={styles.aboutItemText}>
            <h3>
                Back-end developer
            </h3>
            <p>
                Adding Back-ends to complete the working of an website and finding more effective ways to do it is a one thing I have been working on alot.
            </p>
        </div>
    </li>
    <li className={styles.aboutItem}>
        
        <div className={styles.aboutItemText}>
            <h3>
                UI/UX Designer
            </h3>
            <p>
                Designing stuff is a must thing for me as it sorts between multiple ideas and brings out a greater user experiance moreover it's a never-ending task as thing can be more than just be "good".
            </p>
        </div>
    </li>
    </ul>
    </div>
  </section>
}


