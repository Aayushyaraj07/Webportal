import React from 'react'

const News = () => {
  return (
    <div>
        <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
                {/* <h5 className="text-base md:text-lg text-indigo-700 mb-1">See Our Recent News</h5> */}
                <h2 className="text-4xl md:text-6xl dark:text-white text-gray-700 font-semibold">News</h2>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-52 md:h-38 w-full object-cover object-center"
                            src="https://www.manufacturingtodayindia.com/cloud/2023/07/15/QplEQdCY-chandrayaan-3-1200x900.png" alt="blog"/>
                        <div className="p-6  hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            <h3 className="text-base font-medium text-indigo-300 mb-1">Feb 29,
                                2024</h3>
                            <h2 className="text-2xl font-semibold mb-3">L&T powers Chandrayaan mission: Manufacturing subsystems and moon mission tracking</h2>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam modi, expedita quos doloremque...</p>
                            <div className="flex items-center flex-wrap ">
                                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h24"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                {/* <span
                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>6
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-52 md:h-38 w-full object-cover object-center"
                            src="https://www.utilities-me.com/2021/07/DEWA-substation_web_0.jpg" alt="blog"/>
                        <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            <h3 className="text-base font-medium text-indigo-300 mb-1">Feb 29,
                                2024</h3>
                            <h2 className="text-2xl font-semibold mb-3">L&T secures lucrative power contracts in the GCC and India, including floating solar pv project</h2>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam modi, expedita quos doloremque...</p>
                            <div className="flex items-center flex-wrap ">
                                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h24"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                {/* <span
                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>6
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-52 md:h-38 w-full object-cover object-center"
                            src="https://www.constructionweekonline.in/cloud/2023/10/06/8-Construction-Contractor-of-the-Year-Tata-Projects-3.jpg" alt="blog"/>
                        <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            <h3 className="text-base font-medium text-indigo-300 mb-1">Feb 29,
                                2024</h3>
                            <h2 className="text-2xl font-semibold mb-3">Integra and L&T Construction Win Gold and Silver in the 2023 Brandon Hall Group HCM Excellence Awards™</h2>
                            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam modi, expedita quos doloremque...</p>
                            <div className="flex items-center flex-wrap ">
                                <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h24"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                {/* <span
                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>6
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default News