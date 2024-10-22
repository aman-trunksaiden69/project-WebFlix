import axios from '../../Utils/Axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'



const Topnav = () => {

    const [query, setquery] = useState("")
    const [searches, setsearches] = useState([])
    
  
    const getdata = async() => {
      try {
        const {data} = await axios.get(`/search/multi?query=${query}`)
        setsearches(data.results)
      } catch (error) {
        console.log("Error:", error)
      }
    }

 
    useEffect(() => {
      getdata()
    }, [query])


  return <div className='flex items-center w-[70%] h-[10vh] p-5 mt-4 mx-auto rounded-3xl relative'>
    <i className="text-zinc-400 text-2xl ri-search-line"></i>
    <input 
    onChange={(e) => setquery(e.target.value)}
    value={query}
    className='hover:border-[1px] hover:border-blue-400 w-[70%] text-white font-["gilroy"] mx-10 p-2 text-md outline-none rounded-3xl bg-transparent' 
    type='text' placeholder='WebFlix Search'
    />

    {query.length > 0 && (<i onClick={() => setquery("")} className="right-0 text-zinc-400 hover:cursor-pointer text-2xl ri-close-line"></i>)}
    

    <div className='z-[100] absolute w-[60%] max-h-[60vh] bg-zinc-800 top-[90%] left-[15%] overflow-auto'>
        {searches.map((s, i) =>(
           <Link to={`/${s.media_type}/details/${s.id}`} key={i} 
           className='hover:text-black hover:bg-zinc-600 duration-100 hover:border-[#000] text-zinc-100 font-semibold flex justify-start items-center w-[100%] p-5 border-b-[1px] border-[#ffffffad]'>
           <img 
           className='w-[8vh] h-[8vh] rounded-lg object-cover mr-5 shadow-lg' 
           src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path }` : noimage} 
           alt=""/>
           <span>{s.name || s.title || s.original_name || s.original_title}</span>
          </Link>
        ))}
    </div>
  </div>
}

export default Topnav