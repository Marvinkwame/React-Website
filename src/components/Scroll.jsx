import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa"

function Scroll() {
    const [showScroll, setShowScroll] = React.useState(false)

    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if(showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

  return (
    <FaArrowCircleUp className='scrollTop' onClick={scrollTop}
     style={{height: 40, display: showScroll ? 'flex' : "none"}} />
  )
}

export default Scroll