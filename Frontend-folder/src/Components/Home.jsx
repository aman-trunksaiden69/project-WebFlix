import React, { useEffect, useState } from 'react'
import Topnav from './Templates/Topnav'
import axios from '../Utils/Axios'
import Header from './Templates/Header'
import Cardhorizon from './Templates/Cardhorizon'
import Dropdown from './Templates/Dropdown'
import Loader from './Loader'
import { Link } from 'react-router-dom'

const Home = () => {

  document.title = "WebFlix | Home"

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      //generate random numbers and get integer random data from the array 
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error: data not found! ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: Trending data not found! ", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

           
  return wallpaper && trending ? (
  
  <>
     
    <div className='home w-screen h-screen bg-[#000] flex flex-col justify-between gap-[5%] overflow-auto overflow-x-auto'>
  
      <div className='flex flex-col items-center justify-center gap-2 mt-5'>
        <h1 className="anim flex items-center justify-center font-semibold gap-2 text-3xl text-white">
         <span  style={{backgroundImage: 'url(image.gif)',}} className="space bg-center bg-cover text-transparent font-monument tracking-widest z-10 mix-blend-difference">
          WebFlix
         </span>
        </h1>

        <div className='h-full rounded-md w-full mt-2'>
        <Topnav />
        </div>
      </div>      
    
      <div className='flex flex-col gap-1 p-1'>
         <h1 className='text-pink-400 font-semibold text-xl mb-1'>New Feeds</h1>
      
         <nav className='sidebar flex text-white border-[1px] border-pink-400 bg-[#3F3F3F] text-lg gap-1 font-["gilroy"] overflow-auto overflow-x-auto rounded-md'>
            <Link to="/Trendingpage" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            <i className="mr-1 ri-fire-fill"></i>Trending</Link>
            <Link to="/Popularpage" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            <i className="mr-1 ri-global-fill"></i>Popular</Link>
            <Link to="/movie" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            <i className="mr-1 ri-film-fill"></i>Movies</Link>
            <Link to="/tv" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            <i className="mr-1 ri-tv-line"></i>TvShows</Link>
            <Link to="/Peoplepage" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            <i className="mr-1 ri-team-fill"></i>Peoples</Link>
         </nav>
      
         
      </div>

      <div className='p-1'>
       <Header data={wallpaper} />
      </div>


      <div className='flex justify-between p-1'>
      <h1 className='text-xl font-semibold text-pink-400'>New Releases</h1>
      <Dropdown title="Filter" options={['tv', "movie", "all"]} func={(e) => setCategory(e.target.value)} />      
      </div>
      
      <div className='flex items-center justify-center p-1'>
      <Cardhorizon data={trending} />
      </div>
  
    </div>
    
  </>
  ) : (
    <Loader />
  )
}

export default Home