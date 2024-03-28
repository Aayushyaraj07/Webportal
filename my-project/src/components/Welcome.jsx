import React, { useEffect, useState } from 'react'
import '../assets/website/welcome.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Options from './Options';
import Templates from './Templates';
import Foot from './Foot';
import Sidebar from './Sidebar';
import Chatgpt from './Chatgpt';



const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  cssEase: 'ease-in'

};

let teme = localStorage.getItem("theme")

const Welcome = () => {

  const fetchInfo = () => {
    return fetch("/api/welcome", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          // body: JSON.stringify({
          //     title, description, image
          // })
        })
      .then((res) => res.json())
      .then(data=> console.log(data))
  }

  // const fetchInfo = async () => {
  //   const data = await fetch("/api/welcome", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     // body: JSON.stringify({
  //     //     title, description, image
  //     // })
  //   });
  //   const res = await data.json();
  //   console.log(res);
  //   // return res;
  // }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className='flex justify-center -z-10 gap-0'>
      <Sidebar />
      <Chatgpt />
      <div className='w-full leading-tight h-full text-wrap '>
        <div className='h-[250px] bg-skin-fill -mb-[150px]'>
          <p className='font-semibold text-white text-4xl text-start p-6 ml-[88px] pt-10'>Welcome, Aayush!</p>
        </div>
        <div className='h-50% mx-auto rounded-2xl bg-slate-100 w-5/6 shadow-cyan-500/50  shadow-2xl'>
          <div className='flex justify-between'>
            <div>
              {/* <h2 className='font-bold text-2xl pt-6 pl-5'>Key highlights of the day</h2> */}
              <Slider {...settings} className=" w-[320px]  pl-5">

                <div className='flex flex-col justify-between gap-4 bg-slate-100 p-8 w-full h-full'>
                  <div>
                    <p className='font-bold text-xl'>Happy 4th Work-Anniversary</p>
                    <p className='md:text-l  pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio ipsa labore nam autem molestias.</p>
                  </div>
                  <div><img className='mx-auto pt-3' src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGFubml2ZXJzYXJ5fGVufDB8fDB8fHww" alt="" /></div>
                </div>
                <div className='flex flex-col justify-between gap-4 bg-slate-100 p-8 w-full h-full'>
                  <div>
                    <p className='font-bold text-xl'>Infra leader of the month!</p>
                    <p className='md:text-l  pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio ipsa labore nam autem molestias.</p>
                  </div>
                  <div><img className='mx-auto pt-3' src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmRzJTIwY2VyZW1vbnl8ZW58MHx8MHx8fDA%3D" alt="" /></div>
                </div>
                <div className='flex flex-col justify-between gap-4 bg-slate-100 p-8 w-full h-full'>
                  <div>
                    <p className='font-bold text-xl'>New project acquired!</p>
                    <p className='md:text-l  pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio ipsa labore nam autem molestias.</p>
                  </div>
                  <div><img className='mx-auto pt-3' src="https://images.unsplash.com/photo-1429549462610-8dcf74f61550?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpZ2h3YXlzfGVufDB8fDB8fHww" alt="" /></div>
                </div>
                {/* className='mx-auto pt-3' */}



                {/* <div className=''>
              <p className='font-bold text-[19.9px] '>"Key highlights of the day"</p>
              <p className='md:text-l  pt-4'>Message from our CEO: As we stand at the threshold of a new era, I am filled with both excitement &...</p>

              <div className='h-[180px] mt-4'> 
              <img className='w-full' src="https://media.istockphoto.com/id/1356008087/photo/overpass-and-modern-architecture-photographed-in-chengdu-at-dusk.webp?b=1&s=170667a&w=0&k=20&c=P1gOO0zcLyLclCd1Fw1VUNbY9b3FcOVRywyX6pdmf3M=" alt="" />
              </div>
            </div> */}
                {/* Add more card slides as needed */}
              </Slider>
            </div>

            {/* <div className='w-1/3 p-12 border-b-2'>
              <p className='font-bold text-[19.9px] '>"Key highlights of the day"</p>
              <p className='md:text-l  pt-4'>Message from our CEO: As we stand at the threshold of a new era, I am filled with both excitement &...</p>

                <div className='h-[180px] mt-4'> 
                  <img className='w-full' src="https://media.istockphoto.com/id/1356008087/photo/overpass-and-modern-architecture-photographed-in-chengdu-at-dusk.webp?b=1&s=170667a&w=0&k=20&c=P1gOO0zcLyLclCd1Fw1VUNbY9b3FcOVRywyX6pdmf3M=" alt="" />
                </div>
            </div> */}
            <div className='w-1/3 ml-5'>

              <div>
                <img src="https://images.unsplash.com/photo-1602521716590-4667d0574602?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvcnBvcmF0ZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
                  className='md:w-[401vh] md:pr-9 w-8/9 overflow-hidden p-0  object-fill' alt="Image 1" />
              </div>


              {/* Add more image slides as needed */}

            </div>
            <div className='w-1/3 pt-6 text-start'>
              <div className='mr-5'>
                <h2 className='font-bold text-xl'>News & Events</h2>
                <div className='pt-4'>
                  <div className='flex justify-center gap-3'>
                    <img src="https://images.unsplash.com/photo-1561489413-985b06da5bee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                      className='w-32 rounded-xl'
                      alt="" />
                    <div className='flex flex-col p-1'>
                      <h3 className='font-bold text-sm'>"Breaking Boundaries: The Latest Innovations in Tech"</h3>
                      <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eius ab ratione deleniti, illo reprehenderit?</p>
                      <a href="" className='text-xs text-blue-500 text-end'>View more</a>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center gap-3 mt-5 '>
                    <p className='font-bold text-[19.9px] '>Message from our CEO:</p>
                    <p className='md:text-l font-semibold '>"As we navigate through the dynamic landscape of Infrastructure, I am incredibly proud of the strides we've made and the challenges we've overcome together..."</p>
                  </div>
                </div>

                {/* <div className='pt-4'>
                  <div className='flex justify-center gap-3'>
                    <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww"
                    className='w-32 rounded-xl'
                    alt="" />
                    <div className='flex flex-col p-1'>
                    <h3 className='font-bold text-sm'>"Tech Talk: Exploring the Hottest Topics in Innovation"</h3>
                    <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eius ab ratione deleniti, illo reprehenderit?</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Options />
        <Foot />
        {/* <p className='italic ml-11 text-[3vw]'>Not just infrastructure</p> */}
      </div>


      {/* <div className="rounded-md bg-blue-400 ml-[200px] w-[550px] h-[400px] relative">
        <img src="https://etimg.etb2bimg.com/photo/91790996.cms"
         alt=""
         className="w-[750px] h-[400px] rounded-md bg-cover z-10 "/>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Building dreams..</h1>
            <p className="text-lg">Not just infrastructure.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Welcome
