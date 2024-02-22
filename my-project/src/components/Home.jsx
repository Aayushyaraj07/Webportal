import { useNavigate } from 'react-router-dom';
import React, {useEffect}  from 'react'
import Hero from './Hero'
import Quote from './Quote'
import Welcome from './Welcome'
import Flash from './Flash'
import Thirdpage from './Thirdpage'

export default function Home() {

  const history = useNavigate();

  const DashboardValid = async()=>{
      let token =localStorage.getItem("userdatatoken");

      const res = await fetch("/validuser", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          }
      });


      const data =await res.json();
      if(data.status === 401 || !data){
          history("*")
      }else{
          history("/home")
      }
  }


useEffect(()=>{
    DashboardValid();
})
  return (
    <div className='bg-blue-100 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden transition-all '>
      <Flash/>
        <div>
            <div className='flex justify-between items-center mx-8 '>
            <Welcome/>
            <Quote/>
            </div>
           <Hero/>
           <Thirdpage/>
        </div>
    </div>
  )
}
