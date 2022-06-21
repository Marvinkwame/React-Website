import React from 'react'

function Subscribe(props) {
  return (
    <section className={`section subscribe ${props.darkMode ? "dark-theme" : "none"}`}>
        <div className="subscribe-container container">
            <h1 className="subscribe-title">
                Get Started With Holux
            </h1>

            <p className="subscribe-details">
                Subscribe and find super attractive price
                quotes from us, Find your residence soon
            </p>

            <a href="#home" className="button subscribe-button">
                Get Started
            </a>
        </div>
    </section>
  )
}

export default Subscribe