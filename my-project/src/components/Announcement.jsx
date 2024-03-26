import React from 'react'
import Navbar from './Navbar'

const Announcement = () => {
  return (
    <div>
    <Navbar/>
      <div className='bg-blue-100 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden transition-all'>
        <h2 className='text-center text-3xl mb-3 p-4 font-bold  rounded-2xl w-1/2 mx-auto'>Announcements</h2>
        <div className='flex justify-between'>
          <div className='w-1/3 p-8'>
            <img src="https://investallign.b-cdn.net/wp-content/uploads/2022/04/LT-Infotech-and-Mindtree-Merger-Results-and-Analysis.jpg"
            alt=""
            className='w-[500px] lazy' />
          </div>
          <div className='w-2/3 p-8'>
            <h2 className='text-3xl font-semibold'>L&T Infotech and Mindtree Merger : Results and Analysis</h2>
            <p className='text-s mt-4'>Larsen and Toubro is one of the leading engineering firms in India. The company owns two tech companies namely Mindtree and L&T Infotech. The acquisition of Mindtree was done recently in 2019. L&T started its technology company with the name L&T Infotech in 1999. Larsen and Tourbo own 74% stake in L&T Infotech Limited. On the other hand the company owns nearly 61% stake in it. Both these entities are multi billion dollars in valuation. Currently Mindtree is worth somewhere around 8.3 Billion Dollars and L&T Infotech is worth near the range of 13.6 Billion Dollars</p>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-1/3 p-8'>
            <img src="https://newsnviews.larsentoubro.com/SiteAssets/images/Articles/Image1/Construction%20Update%20X%20SHRM%20HR%20Excellence%20Awards%202018.JPG"
            alt=""
            className='w-[500px] lazy' />
          </div>
          <div className='w-2/3 p-8'>
            <h2 className='text-3xl font-semibold'>L&T Construction HR Wins Top Honours at SHRM HR Excellence Awards</h2>
            <p className='text-s mt-4'>L&T HR walked away with top honours for ‘Excellence in Talent Acquisition’ and ‘Excellence in Leveraging HR Technology’ at the glitzy SHRM HR Excellence Awards 2018 held at the Taj Palace, New Delhi on October 11, 2018. The HR Excellence Awards were presented to L&T after a stringent three-level evaluation process that included a final presentation to an esteemed jury and a Q&A. The evaluation parameters included innovation, impact on stakeholders, sustainability and scalability. Dr. C. Jayakumar, General Manager & Head – Human Resources, Mr. Bikram Nayak, Head - Talent Acquisition, Ms. Soujanya Sandesh, Sr. Manager (Talent Acquisition) & Ms. V. Sheeja, Asst. Manager (HR Digitalization & New Initiatives) made the final presentation before the jury.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcement