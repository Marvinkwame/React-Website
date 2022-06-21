import React from 'react'
import Navbar from "./components/Navbar"
import Main from './components/Main'
import Logo from './components/Logo'
import Popular from './components/Popular'
import Value from './components/Value';
import Contact from './components/Contact'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Scroll from './components/Scroll'
import scrollreveal from "scrollreveal"


function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function changeMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  React.useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(
      `
      .home-content,
      .home-search,
      .home-title,
      .home-value,
      .subscribe-container,
      .footer-container`, 
      {
        delay: 500,
      }
    )
    sr.reveal(
      `.home-images,
      .footer-info`,
      {
        delay: 600,
        origin: 'bottom',
      }
    )
    sr.reveal(
      `.logo-label`,
      {
        interval: 100,
      }
    )
    sr.reveal(
      `.value-images,
      .contact-content`,
      {
        origin: 'left',
      }
    )
    sr.reveal(
      `.value-content,
      .contact-images`,
      {
        origin: 'right',
      }
    )


  }, [])


    
  return (
    <div>
        <Navbar
          toggleDarkMode={changeMode}
          darkMode={darkMode}
         />
        <Main darkMode={darkMode} />
        <Logo darkMode={darkMode} />
        <section className={`section popular ${darkMode ? "dark-theme" : "none"}`} id="popular">
          <div className='container'>
            <span className='section-title'>Top Picks</span>
            <h2 className='section-subtitle'>Avalable Homes</h2>

            <Popular darkMode={darkMode} />
          </div>
        </section>
        <Value darkMode={darkMode}  />
        <Contact darkMode={darkMode} />
        <Subscribe darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        <Scroll />
    </div>
  )
}

export default App

