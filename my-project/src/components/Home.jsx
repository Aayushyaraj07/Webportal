import { useNavigate } from 'react-router-dom';
import React, {useEffect}  from 'react'
import Hero from './Hero'
import Quote from './Quote'
import Welcome from './Welcome'
import Flash from './Flash'
import Thirdpage from './Thirdpage'
import Navbar from './Navbar';
import News from './News';

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
      <div>
        <Navbar/>
          <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden transition-all '>
              {/* <Flash/> */}
                <div>
                    
                    <Welcome/>
                    {/* <Quote/> */}
                   
                  {/* <Hero/> */}
                  {/* <Thirdpage/> */}
                  {/* <News/> */}
                </div>
            </div>
      </div>
  )
}
