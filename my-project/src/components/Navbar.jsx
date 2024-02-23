import React from 'react'
import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'
// import {} from "./react-icons"
const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/home",
    },
    {
        id: 2,
        name: "Blogs",
        link: "/blogs"
    },
    {
        id: 3,
        name: "Directory",
        link: "/directory"
    },
    {
        id: 4,
        name: "HR",
        link: "/hr"
    },
]


const Navbar = () => {
  return (
    <div className='bg-yellow-100 h-[12vh] dark:bg-zinc-900  dark:text-white border-b duration-200 relative z-40'>
        <div className='py-4 flex justify-between'>
            <div className="container flex justify-between ">
                {/* Logo and links section */}
                <div className='flex justify-between items-center'>
                    <Link to={"/home"}
                    className='text-primary
                    font-semibold tracking-widest text-2xl uppercase
                    sm:text-3xl mb-7'>
                    9A Business
                    </Link>
                    {/* Menu items */}
                </div>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center pt-3 gap-3 mr-32'>
                            {
                                MenuLinks.map((data,index) => (
                                    <li key={index}>
                                        <Link to={data.link}
                                        className='inline-block text-xl px-3 font-semibold text-gray-500 hover:text-primary
                                        dark:hover:text-primary duration-200'
                                        >
                                            {""}
                                            {data.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                {/* <div className='text-bold text-xl hidden lg:block '>
                    <p>Welcome Aayush😃</p>
                </div> */}
                {/* Navbar right section */}                
                <div className=''>
                    <div className='pt-2'>
                        <DarkMode />
                        <p className="w-12"></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar