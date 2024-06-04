import React from 'react';
import { Projects } from './projects';
import projects from '../../data/projects.json';
import { getimageUrl } from '../../util';
import styles from './projectCard.module.css'
export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    console.log("rendering:",title)//debug
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getimageUrl("projects/refine.png")}/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill}key={id}>{skill} </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link}href={demo}>Live</a>
        <a className={styles.link}href={source}>Source</a>
      </div>
    </div>
  );
};
