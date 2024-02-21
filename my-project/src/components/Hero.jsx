import React from 'react'
import Slider from 'react-slick'
import Wheather from './Wheather';
import ceo from '../assets/website/ceo.jpg'

const Hero = () => {
    const settings ={
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "ease-in-out",
            pauseOnHover: false,
            pauseOnFocus: true,
            slidesToScroll: 1,     
    };
  return (
    <div className='bg-blue-100 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden transition-all flex justify-center items-center gap-7'>
        <div className='Wheather'>
            <Wheather/>
            
        </div>
        {/* <div  className='w-[400px]'>
            <Slider {...settings}>
                <div>
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1530044426743-4b7125613d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9hZHdheXN8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1517416420365-b0f6fa8abf88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvYWR3YXlzfGVufDB8fDB8fHww" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1611839267623-8a861c18d52c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9sbCUyMHBsYXphfGVufDB8fDB8fHww" alt="" />
                </div>
            </Slider>
            <p className='text-primary dark:text-white text-2xl font-semibold mt-8 ml-[125px]'>Social Events</p>
        </div> */}
        {/* <div  className='w-[400px]'>
            <Slider {...settings}>
                <div>
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1530044426743-4b7125613d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9hZHdheXN8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1517416420365-b0f6fa8abf88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvYWR3YXlzfGVufDB8fDB8fHww" alt="" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1611839267623-8a861c18d52c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9sbCUyMHBsYXphfGVufDB8fDB8fHww" alt="" />
                </div>
            </Slider>
            <p className='text-primary dark:text-white text-2xl font-semibold mt-3 ml-[100px]'>Announcement</p>
        </div> */}
    </div>
  )
}

export default Hero