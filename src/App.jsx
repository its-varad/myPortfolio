import  {Navbar} from './components/Navbar/Navbar'
import styles from './App.module.css'
import {Experiance} from "./components/experiance/experiance"
import { Hero } from './components/hero/hero'
import { About } from './components/About/about'
import { Projects } from './components/projects/projects'
import {ProjectCard} from './components/projects/projectCard'
import { Contact } from './components/contact/contact'
import ScrollProgressBar from "./components/ScrollBar/scroll";
function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experiance/>
      <Projects/>
      <Contact/>
        <ScrollProgressBar/>
    </div>
  )
}

export default App
