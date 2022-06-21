import React from 'react'
import contactImg from "../images/contact.png"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

function  Contact(props) {
  return (
    <section className={`contact section ${props.darkMode ? "dark-theme" : "none"}`} id='contact'>
        <div className='contact-container container'>
            <div className='contact-images'>
                <div className='contact-orbe'></div>

                <div className='contact-image'>
                    <img src={contactImg} alt="" />
                </div>
            </div>

            <div className="contact-content">
                <div className="contact-data">
                    <span className='contact-title'>Contact Us</span>
                    <h2 className="contact-subtitle">
                        Easy To Contact Us
                    </h2>
                    <p className="contact-description">
                        Is there a problem finding your dream home? Need a 
                        guide in buying first home? or need a consultation 
                        on residential issues? just contact us.
                    </p>
                </div>

                <div className="contact-card">
                    <div className="contact-card-box">
                        <div className="contact-info">
                            <BsFillTelephoneFill 
                            className={`contact-icon ${props.darkMode ? "dark-mode" : "none"}`} />
                            <div>
                                <h3 className="card-title">Call</h3>
                                <p className="card-info">020419419419</p>
                            </div>
                        </div>

                        <button className="button contact-button">
                            Come Talk To Us
                        </button>
                    </div>

                    <div className="contact-card-box">
                        <div className="contact-info">
                            <AiOutlineMail className="contact-icon" />
                            <div>
                                <h3 className="card-title">E-Mail</h3>
                                <p className="card-info">holux@gmail.com</p>
                            </div>
                        </div>

                        <button className="button contact-button">
                            E-mail us 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact