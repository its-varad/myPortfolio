import React from 'react'
import { useState } from 'react'
import { getimageUrl } from '../../util'
import styles from './Navbar.module.css'
export const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false)

  return <nav className={styles.navbar}>
    <a className={styles.title} href='/'>Portfolio</a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? getimageUrl("nav/closeIcon.png") : getimageUrl("nav/menuIcon.png")} 
        alt="menu.button"
        onClick={() => setMenuOpen(!menuOpen)}></img>
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
            <li><a href='#about'>About</a></li>
            <span className={styles.separator}>|</span>
            <li><a href='#experience'>Skills</a></li>
            <span className={styles.separator}>|</span>
            <li><a href='#projects'>Projects</a></li>
            <span className={styles.separator}>|</span>
            <li><a href='#contacts'>Contacts</a></li>
        </ul>
    </div>
  </nav>
}



