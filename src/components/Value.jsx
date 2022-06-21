import React from 'react'
import Values from "../images/value.jpg"
import valueData from '../valueData'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"


function Value(props) {
  const [isActive, setIsActive] = React.useState(false)

  const toggle = index => {
    if(isActive === index) {
      return setIsActive(null)
    }

    setIsActive(index)
  }

  return (
    <section className={`value section ${props.darkMode ? "dark-theme" : "none"}`} id='value'>
        <div className='value-container container'>

          <div className='value-images'>
            <div className='value-orbe'></div>

            <div className='value-img'>
              <img src={Values} alt="value-pic" />
            </div>
          </div>

          <div className='value-content'>
            <div className="value-data">
              <span className='value-title'>Our Value</span>
              <h2 className="value-subtitle">Value We Give To You<span>.</span></h2>
              <p className='value-description'>
                We always ready to help by providing the best service for you. 
                We believe a good place to live can make your life better.
              </p>
            </div>

            <div className='value-accordion'>
              {valueData.map((item, index) => {
                return (
                  <div className="value-accordion-item" onClick={() => toggle(index)} key={index}>
                    <header className='value-accordion-header'>
                      <h3 className='value-accordion-title'>{item.title}</h3>
                      <div className='value-accordion-arrow'>
                        {isActive === index ? <BsFillCaretUpFill /> : <BsFillCaretDownFill /> }
                      </div>
                    </header>
                    

                    {isActive === index ? (
                    <div className='value-accordion-content'>
                      <p className='value-accordion-description'>{item.description}</p> 
                    </div>) : null}
                  </div>
                )
              })}

            </div>
          </div>
        </div>
    </section>
  )
}

export default Value