import { useNavigate } from "react-router-dom"
import axios from "../Utils/Axios"
import { useEffect, useState } from "react"
import Topnav from './Templates/Topnav'
import Dropdown from './Templates/Dropdown'
import Cards from './Templates/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader"

const Movie = () => {


  document.title = "WebFlix | Movies";

  const Navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [getmovie, setgetmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);


  const MovieshowsHandler = async() => {
        try {
          const {data} = await axios.get(`/movie/${category}?page=${page}`)
    
         if(data.results.length > 0){
          setgetmovie((prevState) => [...prevState, ...data.results])
          setpage(page+1)
         } else{
          sethasMore(false)
         }
      
        }catch (error) {
          console.log("Error:", error)
        }
  };
    
  const refreshHandler = () => {
      if(getmovie === 0){
          MovieshowsHandler()
      } else{
          setpage(1)
          setgetmovie([])
          MovieshowsHandler()
        
      }
  };
    
  useEffect(() => {
    refreshHandler()
  },[category]);


return getmovie.length > 0 ? (
  
  <div className='movie w-screen h-screen overflow-hidden overflow-y-auto bg-gradient-to-r from-blue-300 via-pink-400 to-white flex flex-col gap-1 items-center'>

  <div className='flex p-2 h-[15%] w-[100%] bg-black'>
    <div className='w-full flex items-center justify-between'>
      <h1 className='text-xl font-normal text-white'>
      <i onClick={() => Navigate(-1)} className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
      Movie<small className="ml-2 text-md text-zinc-400">({category})</small>
      </h1>
      
    </div>

    <div className='flex pl-9 justify-center items-center w-[80%]'>
      <Dropdown 
        title="Category" 
        options={["popular", "top_rated", "upcoming", "now_playing"]} 
        func={(e) => setcategory(e.target.value)} 
      />
    </div>

  </div>

  <div className='w-[100%] bg-black'>

  <div className='flex items-center justify-between'>

      <div className='flex items-center w-[100%]'>
      <Topnav />
      </div>
      
  </div>

     <InfiniteScroll loader={<h1>Loading...</h1>} dataLength={getmovie.length} next={MovieshowsHandler} hasMore={hasMore}>
     <Cards data={getmovie} title="movie" />
     </InfiniteScroll>

  </div>
</div>

  ):(
    <Loader />
  )  
}

export default Movie