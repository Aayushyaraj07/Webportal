import React from 'react'
import "../assets/website/wheather.css"
import search_icon from "../assets/website/search.png"
import clear_icon from "../assets/website/clear.png"
import cloud_icon from "../assets/website/cloud.png"
import drizzle_icon from "../assets/website/drizzle.png"
import rain_icon from "../assets/website/rain.png"
import snow_icon from "../assets/website/snow.png"
import wind_icon from "../assets/website/wind.png"
import humidity_icon from "../assets/website/humidity.png"
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiUdemy } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import Documents from './Documents';
import { Link } from 'react-router-dom';
import analytics from '../assets/website/analytic-icon-11452.png'



const Wheather = () => {
  return (
    <div className="second-page max-w-[1200px]">
        <div className='flex justify-center gap-4 mb-6'>
             <div className='bigger div'>
        <div className='flex gap-4  mr-1'>
                <div className='flex justify-center gap-4 mr-1 '>
                    <div className='container2 group '>
                        <div className="top-bar">
                            <input type="text" className='cityInput' placeholder='Search your city' />
                            <div className='search-icon'>
                                <img src={search_icon}
                                className='w-3'
                                alt="" />
                            </div>
                        </div>
                        <div className="main-div pt-4">
                            <div className='wheather-img'>
                                <img src={cloud_icon}
                                alt=""
                                className='mx-auto w-12'/>
                            </div>
                            <div className="wheather-temp">34°c</div>
                            <div className="text-ctext  group-hover:text-white wheather-location text-2xl">Mumbai</div>
                        </div>
                        <div className="data-container">
                            <div className="element ">
                                <img src={humidity_icon} alt="" className='icon w-5 mt-2' />
                                <div className="data">
                                    <div className="humidity-percent">74%</div>
                                    <div className='text'>Humidity</div>
                                </div>
                            </div>
                            <div className="element">
                                <img src={wind_icon} alt="" className='icon w-5 mt-2' />
                                <div className="data">
                                    <div className="wind-speed">18 km/h</div>
                                    <div className='text'>Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[210px] group h-[229px] bg-gradient-to-b from-[#130754] to-[#3b2f80] rounded-xl text-white'>
                        <h1 className='text-ctext  group-hover:text-white text-center mt-3 font-semibold'>Analytics</h1>
                        <div className='mx-auto'>
                            <Link to={"/analytics"}>
                                <img src={analytics}
                                alt="img"
                                className='mx-auto mt-5 w-36' />
                                <h2 className='font-semibold hidden group-hover:block text-end text-sm mr-3 mb-3'>View more &rarr;</h2>
                            </Link>
                        </div>
                    </div>
                    <div className='cursor-pointer w-[210px] group h-[229px] bg-gradient-to-b from-[#130754] to-[#3b2f80] rounded-xl text-white'>
                        <h1 className='text-ctext  group-hover:text-white text-center mt-3 font-semibold'>Corporate Policy</h1>
                        <div className='mx-auto'>
                            <Link to={"/documents"}>
                                <FcDocument size={140} className='mx-auto mt-5'/>
                                <h2 className='font-semibold hidden group-hover:block text-end text-sm mr-3'>View more &rarr;</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className='flex gap-4 pr-3 '>
                    <div className='w-[434px] h-[229px] group bg-gradient-to-b from-[#130754] to-[#3b2f80] rounded-2xl text-white p-1 mt-2'>
                        <h1 className=' text-ctext  group-hover:text-white text-center mt-3 font-semibold'>Birthday Celebration</h1>
                        <div className='group'>
                            <div className='birthday flex justify-center p-6 gap-8  '>
                                <div className='w-1/3 flex flex-col justify-center gap-1'>
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Dp"
                                            className='w-[56px] h-[54px] rounded-full overflow-hidden' />
                                    <div className='flex flex-col justify-center'>
                                    <div><h2 className='font-semibold'>Manish Malhotra</h2></div>
                                        <div><h6 className='text-gray-500 text-xs'>Software Developer</h6></div>
                                        <div><p>27'Feb 2024</p></div>                            
                                    </div>
                                </div>
                                <div className='w-1/3 flex flex-col justify-center gap-1'>
                                    <div className='overflow-hidden  rounded-full w-[4vw] h-[4vw]'>
                                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Dp"
                                            className='w-[56px] h-[54px]  rounded-full overflow-hidden ' />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                    <div><h2 className='font-semibold'>Hemisha Mehta</h2></div>
                                        <div><h6 className='text-gray-500 text-xs'>Bi Developer</h6></div>
                                        <div><p>28'Jan 2024</p></div>                            
                                    </div>
                                </div>
                                <div className='w-1/3 flex flex-col justify-center gap-1'>
                                <div className='rounded-full w-[4vw] h-[4vw]'>
                                    <img src="https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg?size=626&ext=jpg&ga=GA1.1.1237358851.1690999832&semt=ais"
                                            alt="Dp"
                                            className='w-[56px] h-[54px]  rounded-full overflow-hidden ' />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                    <div><h2 className='font-semibold'>Suraj Vishwakarma</h2></div>
                                        <div><h6 className='text-gray-500 text-xs'>SQL Developer</h6></div>
                                        <div><p>14'Jun 2024</p></div>                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[207px] h-[229px] group mt-2 bg-gradient-to-b  from-[#130754] to-[#3b2f80] rounded-xl '>
                        <h1 className='text-ctext  group-hover:text-white text-center mt-3 font-semibold'>Quick Links:</h1>
                        <div className='grid grid-cols-2 gap-3 ml-4  p-2 rounded-2xl'>
                            <a href="https://mail.google.com"><div><BiLogoGmail size={60} className='icc bg-white rounded-full' color='red'/><p className='ml-3 text-white'>Gmail</p></div></a>
                            <a href="https://www.linkedin.com"><div><FaLinkedin size={60} className='icc  bg-white rounded-full' color='blue'/><p className='ml-1 text-white'>LinkedIn</p></div></a>
                            <a href="https://www.microsoft.com"><div><BsMicrosoftTeams size={60} className='icc  bg-white rounded-full' color='blue'/><p className='ml-2 text-white'>Teams</p></div></a>
                            <a href="https://www.udemy.com"><div><SiUdemy size={60} className='icc  bg-white rounded-full' color='purple'/><p className='ml-1 text-white'>Udemy</p></div></a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://pbs.twimg.com/media/GD9weJIaEAAlKUr.jpg" 
                alt=""
                className='w-[34.2vw] rounded-2xl' />
            </div>
        </div>
    </div>
  )
}

export default Wheather