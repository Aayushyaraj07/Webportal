import React from 'react'
import Navbar from './Navbar'

const Blogs = () => {
  return (
    <div>
      <Navbar/>
        <div className='flex justify-center gap-3 h-screen w-5/6 mx-auto bg-yellow-100 '>
          <div className='w-1/2 h-[50vh] pb-2 m-10 bg-red-100'>   
              <div className='relative'>
                  <img className="w-full bg-gradient-to-b from-transparent to-black via-white pb-0 h-[50vh]"
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-10/31/full/1635697688-0002.jpg"
                alt="Your Image"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-white text-center">
                  <h1 className="text-4xl text-white pt-40 font-bold">Overlapping Text</h1>
                  <p className="text-lg">This is some overlapped text.</p>
                </div>
              </div>
              </div>
          </div>
          <div className='w-1/2 h-[50vh] p-8 m-10 bg-blue-100'>hi</div>
        </div>
    </div>
  )
}

export default Blogs