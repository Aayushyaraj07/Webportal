import React from 'react'
import { useState } from "react";
import control from "../assets/website/control.png"
import Calendar from "../assets/website/Calendar.png"
import { FaRobot } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { SiGoogledocs } from "react-icons/si";
import { MdLocalPolice } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiFeedbackFill } from "react-icons/ri";


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Corporate Policies", src: <IoNewspaperSharp size={23} color='cyan' /> },
    { title: "Training & Development", src: <FaRobot size={23} color='cyan'/>, gap: true },
    { title: "Forms & Workflow", src: <RiInstagramFill size={23} color='cyan' /> },
    { title: "Emergency Contacts", src: <IoMdContacts size={23} color='cyan' /> },
    { title: "Health & Wellness ", src: <IoMdTrophy size={23} color='cyan' />, gap: true },
    { title: "News", src: <GiNewspaper size={23} color='cyan' />, gap: true },
    { title: "Blood Bank", src: <MdBloodtype size={23} color='cyan' />, gap: true },
    { title: "Corporate Directory ", src: <GoFileDirectoryFill size={23} color='cyan' /> },
    { title: "Company Culture", src: <SiGoogledocs size={23} color='cyan' /> },
    { title: "Legal Policies", src: <MdLocalPolice size={23} color='cyan' /> },
    { title: "Documents ", src: <FaNetworkWired size={23} color='cyan' />, gap: true },
    { title: "Reports ", src: <TbReportSearch size={23} color='cyan' /> },
    { title: "Projects", src: <AiOutlineFundProjectionScreen size={23} color='cyan' />},
    {title: "Feedback", src: <RiFeedbackFill size={23} color='cyan' />, gap: true },
  ];
  return (
    <div className="flex">
    <div
      className={` ${
        open ? "w-44" : "w-20 "
      } bg-slate-950 h-full p-5 z-10 pt-8 relative duration-300`}
    >
      <img
        src={control}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      <ul className="pt-1 ">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex hover:text-white hover:bg-belownav rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-2" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            {Menu.src}
            {/* <img src={`./src/assets/website/${Menu.src}.png`} /> */}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>

            
                <div className={` ${!open && "hidden"} absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {Menu.title}
                </div>
            
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Sidebar