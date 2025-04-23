
import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import WelcomePage from './components/WelcomePage'
import { projects } from './data/projects'
import ScrollReveal from 'scrollreveal';
// import About2 from './components/About2'

function App() {

  useEffect(() => {
    ScrollReveal().reveal('.sr-hidden', {
      afterReveal: (el) => {
        el.style.visibility = 'visible';
        // If you really need to clean, delay it slightly
        setTimeout(() => ScrollReveal().clean(el), 100);
      },
    });
  }, []);



  return (

    <div className=''>

      <WelcomePage />
      <About className="" />
      {/* <About2 className="sr-hidden" /> */}
      <Projects projects={projects} />
      <Contact />
    </div>
  )
}

export default App
