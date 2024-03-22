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
                <span>L&T Construction HR Wins Top Honours at SHRM HR Excellence Awards!</span>
            </div>
            <div className='announcement-text text2'>
                <span>L&T Infotech and Mindtree Merger </span>
            </div>
            <div>*</div>
            </Marquee>
        </div>
    </Link>
  )
}

export default Flash