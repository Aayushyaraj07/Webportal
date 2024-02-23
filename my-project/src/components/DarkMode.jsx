import React, { useEffect,useState } from 'react'
import LightButton from '../assets/website/light-mode-button.png'
import DarkButton from '../assets/website/dark-mode-button.png'
import user from "../assets/website/edit.png"
import logout from "../assets/website/log-out.png"
import { Link } from 'react-router-dom'

const DarkMode = () => {
    const [open,setOpen] = useState(false)
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;
    // console.log(element);

    const Menus = [
    {
        id: 1,
        name: "Edit Profile",
        link: "/userprofile"
    },
    {
        id: 2,
        name: "Logout",
        link: "/"
    },

    ]

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        if (theme === "dark"){
            element.classList.add("dark")
            element.classList.remove("light")
        }else{
            element.classList.remove("dark")
            element.classList.add("light")
        }
    })
  return (
    <div className='relative flex justify-between gap-4'>

        <div className=''>
            <img src={LightButton}
            onClick={() => setTheme(theme  === "dark" ? "light" : "dark")}
            alt=""
            className={`w-10 mt-3 cursor-pointer absolute right-[90px] z-10 ${ theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300` }
            />
            <img src={DarkButton} 
            onClick={() => setTheme(theme  === "dark" ? "light" : "dark")}
            alt=""
            className={`w-10 mt-3 cursor-pointer absolute right-[90px]  z-10 ${ theme === "light" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
            />
        </div>
        <div className='z-10  mr-5'>
            <div className='menu-container'>
                    <div className='menu-trigger relative'>
                                    {/* <img src="https://media.glamour.com/photos/5695b1ee93ef4b09520e4081/master/w_1600,c_limit/sex-love-life-2013-09-zach-galifinakis-wide-face-main.jpg" alt="" /> */}
                                    <img src="data:image/jpeg;base64,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"
                                            alt="Dp"
                                            className='object-cover cursor-pointer border-2  w-[48px] h-[48px] rounded-full overflow-hidden' />
                                    {
                                        open && (
                                            
                                        )
                                    }       
                    </div>
            </div>
        </div>
    </div>
  )
}

function DropdownItem(props){
    return(
        <li className='dropdownItem'>
            <img src={props.img} alt="" />
            <a>{props.text}</a>
        </li>
    )
}


export default DarkMode