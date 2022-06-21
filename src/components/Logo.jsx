import React from 'react'
import Logo1 from "../images/logo1.png";
import Logo2 from "../images/logo2.png";
import Logo3 from "../images/logo3.png";
import Logo4 from "../images/logo4.png";

function Logo(props) {
  return (
    <section className={`logos section ${props.darkMode ? "dark-theme" : "none"}`}>
      <div className="logo-container container">
        <div className='logo-label'>
          <img src={Logo1} alt="logo1" />
        </div>

        <div className='logo-label'>
          <img src={Logo2} alt="logo2" />
        </div>

        <div className='logo-label'>
          <img src={Logo3} alt="logo3" />
        </div>

        <div className='logo-label'>
          <img src={Logo4} alt="logo4" />
        </div>
      </div>
    </section>
  )
}

export default Logo
