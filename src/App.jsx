import './App.css'

import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Tools from './components/Tools';

export default function App() {
  return (
    <>
      <div className='container_components'>
        <Presentation/>
        <AboutMe/>
        <Tools/>
      </div>
    </>
  )
}
