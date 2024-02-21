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
    <div className='relative'>
        <img src={LightButton}
        onClick={() => setTheme(theme  === "dark" ? "light" : "dark")}
        alt=""
        className={`w-25 cursor-pointer absolute right-0 z-10 ${ theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300` }
        />
        <img src={DarkButton} 
        onClick={() => setTheme(theme  === "dark" ? "light" : "dark")}
        alt=""
        className={`w-25 cursor-pointer absolute right-0 z-10 ${ theme === "light" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
        />
    </div>
  )
}

export default DarkMode