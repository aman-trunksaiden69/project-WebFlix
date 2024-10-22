import React, { useEffect, useState } from 'react'
import Sidebar from './Templates/Sidebar'
import Topnav from './Templates/Topnav'
import axios from '../Utils/Axios'
import Header from './Templates/Header'
import Cardhorizon from './Templates/Cardhorizon'
import Dropdown from './Templates/Dropdown'
import Loader from './Loader'

const Home = () => {

  document.title = "WebFlix | Home"

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
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
      console.log("Error: data not found! ", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);


  return wallpaper && trending ? (
  
  <>
    
    <Sidebar />
    <div className='home w-[75%] h-[99%] bg-[#000] flex flex-col gap-[10%] rounded-lg border-[1px] border-[#FEB8E7] overflow-auto overflow-x-auto'>
      <Topnav />
      <Header data={wallpaper} />

      <div className='flex justify-between p-5'>
      <h1 className='text-3xl font-semibold text-zinc-200'>Latest Releases</h1>
      <Dropdown title="Filter" options={['tv', "movie", "all"]} func={(e) => setCategory(e.target.value)} />      
      </div>
    

      <Cardhorizon data={trending} />
    </div>
  </>
  ) : (
    <Loader />
  )
}

export default Home