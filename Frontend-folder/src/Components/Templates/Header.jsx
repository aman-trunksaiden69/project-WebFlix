import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({data}) => {

  
return (
    <div style={{
      background: `url(https://image.tmdb.org/t/p/original/${
        data.backdrop_path || data.profile_path
      })`, 
        
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }} 
    className='w-[100%] h-[50vh] flex flex-col items-start justify-center p-[5%] font-["gilroy"] border-[1px] border-pink-400 capitalize rounded-tl-3xl rounded-br-3xl'>
        <h1 className='w-[100%] text-xl font-extrabold text-white'>
        {data.name || data.title || data.original_name || data.original_title}
        </h1>

        <p className='w-[80%] text-sm mt-3 mb-3 text-white font-medium'> 
        {data.overview?.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} 
        className="text-blue-400 text-sm">more</Link>
        </p>

        <div className='flex gap-3 text-sm'>
        <i className="text-pink-500 ri-megaphone-fill flex gap-1">
          <h3 className='font-["gilroy"]'>
            {data.release_date || "No Information"}
          </h3>
        </i> 
        <i className="text-pink-500 ri-disc-fill flex gap-1">
          <h3 className='font-["gilroy"]'> 
            {data.media_type ? data.media_type : "No Movies" || data.media_type.toUpperCase()}
          </h3>
        </i>
        </div>

        <Link to={`/${data.media_type}/details/${data.id}/trailer`} 
         className='bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] text-white p-2 text-sm duration-200 rounded-lg font-bold hover:text-black hover:scale-105 mt-8'>
        {" "}
        Watch Trailer
        </Link>
    </div>
  );
} 

export default Header