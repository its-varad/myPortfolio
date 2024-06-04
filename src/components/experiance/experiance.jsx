import React from 'react'
import skills from '../../data/skills.json'
import styles from "./experiance.module.css"
import history from "../../data/history.json"
import { getimageUrl } from '../../util'
export const Experiance = () => {
  return <section className={styles.container} id='experience'>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
        <div className={styles.skills}>
            {
                skills.map((skill,id) =>{
                    return <div key={id} className={styles.skill} >
                        <div className={styles.skillImageContainer}><img src={getimageUrl(skill.imageSrc)} alt={skill.imageSrc}/></div>
                        <p>{skill.title}</p>
                    </div>
                    
                })
            }
        </div>
    </div>
  </section>
}

