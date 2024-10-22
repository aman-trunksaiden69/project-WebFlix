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
      const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`)
        
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
  
  <div className='w-screen h-screen overflow-hidden overflow-y-auto bg-gradient-to-r from-blue-400 via-pink-500 to-white flex flex-col gap-1 items-center'>

    <div className='px-[5%] mt-4 border-[1px] border-[#FEB8E7] h-[15%] w-[100%] bg-black rounded-md'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-normal text-zinc-100 mt-2'>
        <i onClick={() => Navigate(-1)} className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
        Trending<small className="ml-2 text-lg text-zinc-700">({category})</small>
        </h1>

        <div className='flex items-center w-[100%]'>
        <Topnav />
        <Dropdown title="Category" options={["MOVIES", "TV", "ALL"]} func={(e) => setcategory(e.target.value)} />
        <div className='w-[2%]'></div>
        <Dropdown title="Duration" options={["WEEKS", "DAYS"]} func={(e) => setduration(e.target.value)} />
        </div>
       </div>

    </div>

    <div className='border-[1px] border-[#FEB8E7] w-[100%] bg-black rounded-md'>

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