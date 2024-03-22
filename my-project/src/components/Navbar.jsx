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
        link: "/home"
    },
    {
        id: 3,
        name: "People",
        link: "/home"
    },
    {
        id: 4,
        name: "News",
        link: "/home"
    },
    {
        id: 5,
        name: "Analysis",
        link: "/home"
    },
    {
        id: 6,
        name: "Resources",
        link: "/home"
    },
    {
        id: 7,
        name: "Events",
        link: "/home"
    },
    // {
    //     id: 8,
    //     name: "Activity",
    //     link: "/home"
    // },

]


const Navbar = () => {
  return (
    <div className='bg-white h-[10vh] dark:bg-zinc-900  dark:text-white border-b duration-200 relative z-40'>
        <div className='py-1 flex justify-center'>
            <div className="container flex justify-between gap-20 ">
                {/* Logo and links section */}
                <div className='flex justify-between  '>
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuh_tKaRzpm-jCSPin5ncZSAqscayVT8xmQ&s"
                     alt=""
                     className='w-9  rounded-full mt-2' /> */}
                    <Link to={"/home"}
                    className='text-primary
                    font-semibold tracking-widest text-2xl uppercase
                    sm:text-xl mt-5'>
                    <img src="https://9abusiness.com/images/nine%20a%20logo.svg" className='w-36 -mt-3' alt="" />
                    </Link>
                    {/* Menu items */}
                </div>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center pt-3 gap-5 '>
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
                        {/* <p className="w-1"></p> */}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar