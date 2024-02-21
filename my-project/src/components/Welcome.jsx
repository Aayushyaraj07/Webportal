import React from 'react'
import '../assets/website/welcome.css'
const Welcome = () => {
  return (
    <div>
      <div className='w-[850px] leading-tight h-[400px] mb-[150px] text-wrap '>
        <h1 className='heading font-bold text-wrap leading-tight text-[9vw]'>Empowering Infrastructure Evolution.</h1>
        {/* <p className='italic ml-11 text-[3vw]'>Not just infrastructure</p> */}
      </div>


    {/* <div className="rounded-md bg-blue-400 ml-[200px] w-[550px] h-[400px] relative">
        <img src="https://etimg.etb2bimg.com/photo/91790996.cms"
         alt=""
         className="w-[750px] h-[400px] rounded-md bg-cover z-10 "/>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Building dreams..</h1>
            <p className="text-lg">Not just infrastructure.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Welcome
