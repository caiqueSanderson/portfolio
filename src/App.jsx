import styles from './App.module.css'

import Presentation from './components/Component_presentation';
import AboutMe from './components/Component_about';
import Tools from './components/Component_tools';
import Projects from './components/Component_projects';

export default function App() {
  return (
    <div className={styles.page}>
      <div className={styles.container_components}>
        <Presentation />
        <AboutMe />
        <Tools className={styles.containerTools} />
      </div>

      <div className={styles.container_projects}>
        <Projects />
      </div>
    </div>
  )
}
