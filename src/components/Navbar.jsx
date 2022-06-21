import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { BsCurrencyDollar, BsTelephoneFill, BsMoon, BsSun } from "react-icons/bs";

function Navbar(props) {
    
    const [navbar, setNavBar] = React.useState(false)

    function changeBackground() {
        if(window.scrollY >= 50) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    React.useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

  return (
    <header className={`header ${navbar ? "scroll-header" : "none"}`}>
        <nav className="container nav">
            <a href="#home" className="nav-logo">
                Holux
                <FaHome className='logo' /> 
            </a>
            
            <div className={`nav-menu ${props.darkMode ? "dark-theme" : "none"}` }>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">
                        <FaHome className='link-logo' />
                        <span>Home</span></a>
                    </li>
                    <li className="nav-item"><a href="#popular">
                        <BiBuildingHouse className='link-logo' />
                        <span>Residences</span></a>
                    </li>
                    <li className="nav-item"><a href="#value">
                        <BsCurrencyDollar className='link-logo' />
                        <span>Pricing</span></a>
                    </li>
                    <li className="nav-item"><a href="#contact">
                        <BsTelephoneFill className='link-logo' />
                        <span>Contact</span></a>
                    </li>
                </ul>
            </div>

            <div onClick={props.toggleDarkMode} className={`${navbar ? "scroll-header" : "none"}`}>
                {props.darkMode ? 
                <BsSun className='background-icon' /> : 
                <BsMoon className='background-icon' />}
            </div>
            

            <a href="#contact" className="button nav-button">
                Subscribe
            </a>
        </nav>
    </header>
  )
}

export default Navbar;

