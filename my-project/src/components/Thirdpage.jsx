import React from 'react'
import { Link } from 'react-router-dom'
const Thirdpage = () => {
  return (
    <div  className='img gallery'>
        <div className='flex justify-between p-8'>
            <div className='p-8 rounded-3xl hover:opacity-60 cursor-pointer'>
                <Link to={"/gallery"}>
                    <img src="https://teknopoint.in/wp-content/uploads/2023/02/MicrosoftTeams-image-22-1536x1125.jpg"
                    alt=""
                    className='w-[900px] ' />
                </Link>
            </div>
            <div>
            <div className=' h-[174px] bg-gradient-to-b from-[#130754] to-[#3b2f80]  text-white m-5 rounded-2xl w-[500px]'>
                <h2 className='text-center'>hello</h2>
            </div>
            <div className=' h-[174px] bg-gradient-to-b from-[#130754] to-[#3b2f80]  text-white m-5 rounded-2xl w-[500px]'>
                <h2 className='text-center'>hello</h2>
            </div>
            <div className=' h-[174px] bg-gradient-to-b from-[#130754] to-[#3b2f80]  text-white m-5 rounded-2xl w-[500px]'>
                <h2 className='text-center'>hello</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Thirdpage