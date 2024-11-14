import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'


const Cards = ({data,title}) => {
  
  return (
  <div className='w-full h-full flex flex-wrap gap-[5%] items-center mt-4 px-[2%] font-["gilroy"]'>

    {data.map((c, i) => (
      
      <Link key={i} to={`/${c.media_type || title}/details/${c.id}`}
       className='relative h-[62vh] p-3 w-[20%] flex flex-col gap-1 justify-center rounded-md'>
        <div className='h-full w-full overflow-hidden rounded-md'>
        <img className='hover:scale-105 duration-150 h-[50vh] w-full object-cover rounded-md' 
           src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
            c.poster_path || c.backdrop_path || c.profile_path
          }` : noimage} 
          alt="broken"
        />
        </div>
         <h1 className='text-md text-zinc-100 mt-3 font-semibold'>
         {c.name || c.title || c.original_name || c.original_title}
        </h1>
         
         {c.vote_average && (
            <div className='shadow-[2px_4px_4px_rgba(0,1,0,0.5)] absolute right-[-2%] bottom-[25%] text-white rounded-full font-semibold text-sm w-[6.8vh] h-[6.8vh] border-[2px] border-black bg-yellow-500 flex justify-center items-center'>
            {(c.vote_average * 10).toFixed()}
            <sup>%</sup>
           </div>
         )}
    
      </Link>

    ))}
    
    </div>
    
  )
}

export default Cards