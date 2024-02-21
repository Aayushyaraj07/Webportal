import React from 'react'
import Hero from './Hero'
import Quote from './Quote'
import Welcome from './Welcome'
import Flash from './Flash'
import Thirdpage from './Thirdpage'

export default function Home() {
  return (
    <div className='bg-blue-100 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden transition-all '>
      <Flash/>
        <div>
            <div className='flex justify-between items-center mx-8 '>
            <Welcome/>
            <Quote/>
            </div>
           <Hero/>
           <Thirdpage/>
        </div>
    </div>
  )
}
