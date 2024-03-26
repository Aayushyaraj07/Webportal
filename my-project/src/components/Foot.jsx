import React from 'react'

const Foot = () => {
  return (
    <div>
      <div className='flex  justify-center gap-4 pt-9 ml-5 mb-40 mr-50 '>
            <div className=' cursor-pointer group w-[220px] h-[140px] bg-f2 rounded-2xl'>
                        <p className=' text-white group-hover:text-white text-center mt-5 font-semibold'>Loan Growth</p>
                        <div className='mx-auto mt-5'>
                            <h2 className='text-center ml-3 font-bold text-4xl text-white'>23% &uarr;</h2>
                            <p className='text-center mt-2  text-sm text-white'>this quater</p>
                        </div>
            </div>
            <div className=' cursor-pointer group w-[220px] h-[140px] bg-f3 rounded-2xl'>
                        <p className=' text-white group-hover:text-white text-center mt-5 font-semibold'>Investment Growth</p>
                        <div className='mx-auto mt-5'>
                        <h2 className='text-center ml-3 font-bold text-4xl text-white'>23% &uarr;</h2>
                        <p className='text-center mt-2  text-sm text-white'>this quater</p>
                        </div>
            </div>
            <div className=' cursor-pointer group w-[220px] h-[140px] bg-f4 rounded-2xl'>
                        <p className=' text-white group-hover:text-white text-center mt-5 font-semibold'>New Accounts</p>
                        <div className='mx-auto mt-5'>
                        <h2 className='text-center ml-3 font-bold text-4xl text-white'>23% &uarr;</h2>
                        <p className='text-center mt-2  text-sm text-white'>this quater</p>
                        </div>
            </div>
            <div className=' cursor-pointer group w-[220px] h-[140px] bg-f5 rounded-2xl'>
                        <p className=' text-white group-hover:text-white text-center mt-5 font-semibold'>Distance from goal 1</p>
                        <div className='mx-auto mt-5'>
                        <h2 className='text-center ml-3 font-bold text-4xl text-white'>23% &uarr;</h2>
                        <p className='text-center mt-2  text-sm text-white'>this quater</p>
                        </div>
            </div>
            <div className=' cursor-pointer group w-[220px] h-[140px] bg-f6 rounded-2xl'>
                        <p className=' text-white group-hover:text-white text-center mt-5 font-semibold'>Distance from goal 2</p>
                        <div className='mx-auto mt-5'>
                        <h2 className='text-center ml-3 font-bold text-4xl text-white'>23% &uarr;</h2>
                        <p className='text-center mt-2  text-sm text-white'>this quater</p>
                        </div>
            </div>
      </div>  
      <div className='w-full bg-belownav'>
        <p></p>
      </div>
    </div>
  )
}

export default Foot