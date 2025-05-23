import React from 'react'
import { Link} from 'react-router-dom'

const Start = () => {

  document.title = `WebFlix | Start`;


return (
    <div className='flex flex-col justify-between h-screen w-screen bg-[#000] text-white font-["gilroy"]'>
    
    <div className='h-[60%] w-full'>
     <img className='h-full w-full object-cover' src="/webflixstart.jpg" alt="" />  

     <div className='bg-[#00000071] flex flex-col gap-2 items-center justify-center w-full h-[20%] absolute top-[46%]'>
     <img className='w-[16%] h-[46%] rounded-md' src="/webflix1.jpg" alt="" /> 
     <h1 className='text-2xl font-medium'>Movies<span className='text-pink-400'>Watch</span></h1>
     </div>  

    </div>

    <div className='h-[40%] flex flex-col items-center justify-between'>
    <p className='text-center ml-1 leading-4 mt-2 text-sm'>Watch unlimited movies, series & TV shows anywhere, anytime</p>  
    
    <div className='w-full p-3 border-t-[1px] rounded-t-xl border-pink-400 flex items-center justify-center'>

      <Link to="/Login" 
        className='px-20 py-3 text-xl flex gap-2 bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] rounded-md hover:text-black hover:scale-105 duration-200'>
        Let's Started
        <i className="ri-arrow-right-line"></i>
      </Link>

    </div>

    </div>
  
  </div>
  );
}

export default Start