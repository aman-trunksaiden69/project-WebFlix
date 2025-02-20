import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav'
import Dropdown from './Templates/Dropdown'
import axios from '../Utils/Axios'
import Cards from './Templates/Cards'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component';



const Trendingpage = () => {


   document.title = "WebFlix | Trending"


   const Navigate = useNavigate()
   const [category, setcategory] = useState("all")
   const [duration, setduration] = useState("day") 
   const [trending, settrending] = useState([])
   const [page, setpage] = useState(1)
   const [hasMore, sethasMore] = useState(true)

 
   
  const TrendingshowsHandler = async() => {
    try {

      const formattedCategory = category.toLowerCase(); // Convert to lowercase
      const formattedDuration = duration.toLowerCase(); // Convert to lowercase

      const {data} = await axios.get(`/trending/${formattedCategory}/${formattedDuration}?page=${page}`)
        
     if(data.results.length > 0){
      settrending((preState) => [...preState, ...data.results])
      setpage(page+1)
     } else{
      sethasMore(false)
     }
  
    }catch (error) {
      console.log("Error:", error)
    }
  }

  const refreshHandler = () => {
      if(trending.length === 0){
        TrendingshowsHandler()
      } else{
         setpage(1)
         settrending([])
         TrendingshowsHandler()
      }
  }


  useEffect(() => {
     refreshHandler()
  }, [category,duration])
  

  return  trending.length > 0 ? ( 
  
<div className='trending w-screen h-screen overflow-hidden overflow-y-auto bg-gradient-to-r from-blue-300 via-pink-400 to-white flex flex-col gap-1 items-center'>

    <div className='flex p-2 item-center justify-between gap-1 h-[15%] w-[100%] bg-black'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl font-normal text-white'>
        <i onClick={() => Navigate(-1)}
         className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line">
        </i>
        Trending<small className="ml-1 text-md text-zinc-400">({category})</small>
        </h1>
      </div>

      <div className='dropdown flex gap-1 items-center w-[60%]'>
        <Dropdown 
          title="Category" 
          options={["movie", "tv", "all"]} 
          func={(e) => setcategory(e.target.value)} 
        />

        <Dropdown 
          title="Duration" 
          options={["week", "day"]} 
          func={(e) => setduration(e.target.value)} 
        />
      </div>
    </div>

    <div className='w-[100%] bg-black'>

    <div className='w-[100%] bg-black'>
      <div className='w-full flex items-center justify-between'>

        <div className='flex items-center w-[100%]'>
        <Topnav />
        </div>
      </div>

    </div>

       <InfiniteScroll loader={<h1>Loading...</h1>} dataLength={trending.length} 
          next={TrendingshowsHandler} hasMore={hasMore}>

          <Cards data={trending} title={category} />
       </InfiniteScroll>

    </div>

</div>
  ) : (
    <Loader />
  );
}

export default Trendingpage