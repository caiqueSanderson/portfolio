import './App.css'

import Presentation from './components/Component_presentation/Presentation';
import AboutMe from './components/Component_about/AboutMe';
import Tools from './components/Component_tools/Tools';

export default function App() {
  return (
    <>
      <div className='container_components'>
        <Presentation/>
        <AboutMe/>
        <Tools/>
      </div>
      <div className="container_projects">
        
      </div>
    </>
  )
}
