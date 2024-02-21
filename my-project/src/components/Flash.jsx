import React from 'react'
import "../assets/website/flash.css"
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
const Flash = () => {
  return (
    <Link to={"/announcement"}>
        <div className='announcement dark:bg-primary'>
            <Marquee speed={60} gradient={false} pauseOnHover>
            <div className='announcement-text text1'>
                <span>Announcement📢</span>
                <span>This announcement is regarding the webportal frontend part which has started taking shape!</span>
            </div>
            <div className='announcement-text text2'>
                <span>Another announcement📢</span>
                <span>This announcement is regarding the webportal frontend part which has started taking shape!</span>
            </div>
            </Marquee>
        </div>
    </Link>
  )
}

export default Flash