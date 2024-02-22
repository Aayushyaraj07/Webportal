import React, { useEffect,useState } from 'react'
import LightButton from '../assets/website/light-mode-button.png'
import DarkButton from '../assets/website/dark-mode-button.png'
const DarkMode = () => {
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;
    // console.log(element);

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
    <div className='relative flex justify-between gap-3'>

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
        <div className='z-10  mr-9'>
            <div className='menu-container'>
                    <div className='menu-trigger overflow-hidden'>
                                    {/* <img src="https://media.glamour.com/photos/5695b1ee93ef4b09520e4081/master/w_1600,c_limit/sex-love-life-2013-09-zach-galifinakis-wide-face-main.jpg" alt="" /> */}
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB8EkVG4PR_JsFv0X6q7uUX4AG1rhnSXwAA&s"
                                            alt="Dp"
                                            className=' w-[48px] h-[45px] rounded-full overflow-hidden' />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default DarkMode