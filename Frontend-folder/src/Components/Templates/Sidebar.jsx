import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return <div className='w-[100%] h-[99vh] bg-[#000] rounded-lg border-[1px] border-[#FEB8E7] p-3'>
   
   <div className='twonav flex flex-col gap-2 mt-8'>
   <h1 className='text-white font-semibold text-2xl mt-3 mb-2'>New Feeds</h1>

   <nav className='flex text-zinc-400 bg-slate-600 text-lg gap-1 font-["gilroy"] overflow-auto overflow-x-auto'>
      <Link to="/Trendingpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-1 ri-fire-fill"></i>Trending</Link>
      <Link to="/Popularpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-1 ri-global-fill"></i>Popular</Link>
      <Link to="/movie" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-1 ri-film-fill"></i>Movies</Link>
      <Link to="/tv" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-1 ri-tv-line"></i>TvShows</Link>
      <Link to="/Peoplepage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-1 ri-team-fill"></i>Peoples</Link>
    </nav>

    <hr className='border-none h-[1px] bg-zinc-400'/>

    <nav className='flex flex-col text-zinc-400 text-lg gap-1 font-["gilroy"]'>
      <h1 className='text-white font-semibold text-2xl mt-3 mb-2'>WebSite Information</h1>
      <Link to="/Aboutpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      About</Link>
      <Link to="/Contactpage" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-phone-fill"></i>Contact</Link>
      <Link to="/Login" className='hover:bg-blue-400 hover:text-white duration-300 rounded-lg p-3'>
      <i className="mr-2 ri-phone-fill"></i>Login</Link>
    </nav>
   </div>

  </div>
}

export default Sidebar