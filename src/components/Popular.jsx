import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import data from "../data.js"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"


function Popular(props) {
  const swiperNavPrevRef = React.useRef(null)
  const swiperNavNextRef = React.useRef(null)
    
  return (
        <Swiper
           modules={[Navigation, Pagination]}
           navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current
          }}
           spaceBetween={10}
           slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
           loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
           className="swiper-container"
            >
            {data.map((item, index) => {
                    return (
                        <SwiperSlide className='myswiper' key={index}>
                            <div className={`popular-card ${props.darkMode ? "dark-theme" : "none"}`} >
                                <img src={`../images/${item.image}`} alt="popular-home"  />
                                <div className='popular-data'>
                                    <h2 className='popular-price'><span>$</span> {item.price}</h2>
                                    <h3 className='popular-title'>{item.title}</h3>
                                    <p className='popular-location'>{item.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div ref={swiperNavPrevRef}><GrLinkPrevious className='swiper-prev' /></div>
                <div ref={swiperNavNextRef}><GrLinkNext className='swiper-next' /></div>
        </Swiper>
        
  )
}




export default Popular

