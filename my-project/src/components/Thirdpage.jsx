import React from 'react'
import { Link } from 'react-router-dom'
const Thirdpage = () => {
  return (
    <div  className='img gallery max-w-[1200px] mx-auto'>
        <div className='flex justify-between p-8'>
            <div className='p-8  '>
                <Link to={"/gallery"}>
                    <img src="https://teknopoint.in/wp-content/uploads/2023/02/MicrosoftTeams-image-22-1536x1125.jpg"
                    alt=""
                    className='w-[500px] rounded-2xl hover:opacity-60 cursor-pointer overflow-hidden  ' />
                </Link>
            </div>
            <div>
               <div className='flex mt-6'>
                    <div className='group cursor-pointer h-[175px] bg-gradient-to-b from-[#130754] to-[#3b2f80]  text-white m-2 rounded-2xl w-[250px]'>
                        <h2 className=' text-ctext group-hover:text-white text-center mt-3 font-semibold'>Employee of the month</h2>
                        <div className='flex justify-between gap-2'>
                            <div className='p-1'>
                            <img src="https://i.pinimg.com/originals/af/9f/1f/af9f1fed99621ae20f9edd2ab6cbb8bd.jpg"
                                            alt="Dp"
                                            className='w-[77px] h-[77px] rounded-full object-contain bg-white mt-6 ml-6 ' />
                            </div>
                            <div className='mt-6 mr-3'>
                                <h2 className='font-semibold'>Shubham Taigade</h2>
                                <p className='text-gray-500 text-s'>RPA developer</p>
                                <h3 className='italic'>March'24</h3>
                            </div>
                        </div>
                    </div>
                    <div className='group cursor-pointer h-[174px] bg-gradient-to-b from-[#130754] to-[#3b2f80]  text-white m-2 rounded-2xl w-[250px]'>
                      <Link to={"https://www.forbesindia.com/article/leadership/shareholders-give-emotional-farewell-to-man-of-stainless-steel-am-naik/87439/1"}>
                        <h2 className=' text-ctext group-hover:text-white text-center mt-3 font-semibold'>Kudos & Awards</h2>
                            <div>
                                <img src="https://www.forbesindia.com/media/images/2023/Aug/img_215505_amnaik.jpg"
                                alt=""
                                className='w-44 rounded-2xl mx-auto mt-1 object-contain bg-white' />
                                <p className='pb-4 text-xs italic mx-5 '>"Shareholders give emotional farewell..."</p>
                            </div>
                        </Link>
                    </div>
               </div> 
            <div className='group cursor-pointer h-[174px] bg-gradient-to-b from-[#130754] to-[#3b2f80]  text-white m-2  rounded-2xl w-[514px]'>
                <h2 className=' text-ctext group-hover:text-white text-center pt-3 font-semibold'>New-Joinee</h2>
                <div className='flex justify-between mx-3 '>
                    <div className='w-22 p-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcldl0aIfOfWJXcUZgUyQ8YroTdkKU89AkewwNV4-Dfw&s"
                                            alt="Dp"
                                            className='w-[56px] h-[54px] rounded-full object-contain bg-white' />
                                    <div className='flex flex-col justify-center'>
                                    <div><h2 className='font-semibold'>Sukesh Chakrobarty</h2></div>
                                        <div><h6 className='text-gray-500 text-xs'>Software Developer</h6></div>
                                        <div><p>27'Feb 2024</p></div>                            
                                    </div>
                    </div>
                    <div className='w-22 p-2'>
                    <img src="https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg"
                                            alt="Dp"
                                            className='w-[56px] h-[54px] rounded-full object-contain bg-white' />
                                    <div className='flex flex-col justify-center'>
                                    <div><h2 className='font-semibold'>Ramesh Sukoi</h2></div>
                                        <div><h6 className='text-gray-500 text-xs'>Software Developer</h6></div>
                                        <div><p>27'Feb 2024</p></div>                            
                                    </div>
                    </div>
                    <div className='w-22 p-2'>
                    <img src="data:image/jpeg;base64,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"
                                            alt="Dp"
                                            className='w-[56px] h-[54px] rounded-full object-contain bg-white' />
                                    <div className='flex flex-col justify-center'>
                                    <div><h2 className='font-semibold'>Sanika Singh</h2></div>
                                        <div><h6 className='text-gray-500 text-xs'>Software Developer</h6></div>
                                        <div><p>27'Feb 2024</p></div>                            
                                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Thirdpage