import React from 'react'
import logo from "../images/home.jpg"
import { FiMapPin } from "react-icons/fi";

function Main(props) {

    
  return (
    <main>
        <section className="home section" id="home">
            <div className='home-container container'>

                <div className="home-data" id="home-data">
                    <h1 className='home-title'>
                        Discover <br/> Most Suitable <br/> Property
                    </h1>
                    <p className='home-content'>
                        Find a variety of properties that suit you very easily, 
                        forget all difficulties in finding a residence for you
                    </p>

                    <form action="" className={`home-search ${props.darkMode ? "dark-theme" : "none"}`}>
                        <FiMapPin className='icon' />
                         <input type="search" placeholder='Search Location' className='home-input' />
                         <button className='button'>Search</button>
                    </form>

                    <div className='home-value'>
                        <div>
                            <h3 className='home-numbers'>9K <span>+</span></h3>
                            <p className='home-info'>Premium <br/> Product</p>
                        </div>

                        <div>
                            <h3 className='home-numbers'>2K <span>+</span></h3>
                            <p className='home-info'>Happy <br/> Customer</p>
                        </div>

                        <div>
                            <h3 className='home-numbers'>28K <span>+</span></h3>
                            <p className='home-info'>Awards <br/> winning</p>
                        </div>

                    </div>
                </div>

                <div className='home-images'>
                    <div className='home-orbe'></div>

                    <div className="home-img">
                        <img src={logo} alt="home--cover" />
                    </div>
                </div>

                <div>

                </div>
            </div>
        </section>
    </main>
  )
}

export default Main