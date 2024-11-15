import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return <div className='sidebar w-[25%] h-[99%] bg-[#000] rounded-lg border-[1px] border-[#FEB8E7] p-3 pt-8 overflow-auto overflow-x-auto'>
    <div className='flex items-center justify-center gap-2'>
    <img className='w-[10%] h-[10%] rounded-md' src="/webflix1.jpg" alt="" />
    <h1 className='anim text-3xl text-white font-bold'>
     <span className='space'>WebFlix</span>
    </h1>
    </div>
   
   <div className='twonav flex flex-col gap-2 mt-8'>
   <nav className='flex flex-col text-zinc-400 text-lg gap-1 font-["gilroy"]'>
      <h1 className='text-white font-semibold text-2xl mt-3 mb-2'>New Feeds</h1>
      <Link to="/Trendingpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-fire-fill"></i>Trending</Link>
      <Link to="/Popularpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-global-fill"></i>Popular</Link>
      <Link to="/movie" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-film-fill"></i>Movies</Link>
      <Link to="/tv" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-tv-line"></i>Tv Shows</Link>
      <Link to="/Peoplepage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-team-fill"></i>Peoples</Link>
    </nav>

    <hr className='border-none h-[1px] bg-zinc-400'/>

    <nav className='flex flex-col text-zinc-400 text-lg gap-1 font-["gilroy"]'>
      <h1 className='text-white font-semibold text-2xl mt-3 mb-2'>WebSite Information</h1>
      <Link to="/Aboutpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-information-2-fill"></i>About</Link>
      <Link to="/Contactpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-phone-fill"></i>Contact</Link>
    </nav>
   </div>

  </div>
}

export default Sidebar