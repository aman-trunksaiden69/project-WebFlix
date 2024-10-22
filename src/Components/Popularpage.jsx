import { useNavigate } from "react-router-dom"
import axios from "../Utils/Axios"
import { useEffect, useState } from "react"
import Topnav from './Templates/Topnav'
import Dropdown from './Templates/Dropdown'
import Cards from './Templates/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader"



const Popularpage = () => {


    document.title = "WebFlix | Popular"
    const Navigate = useNavigate()
    const [category, setcategory] = useState("movie")
    const [getpopular, setgetpopular] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)


    const PopularshowsHandler = async() => {
        try {
          const {data} = await axios.get(`${category}/popular?page=${page}`)
    
         if(data.results.length > 0){
          setgetpopular((prevState) => [...prevState, ...data.results])
          setpage(page+1)
         } else{
          sethasMore(false)
         }
      
        }catch (error) {
          console.log("Error:", error)
        }
      }
    
      const refreshHandler = () => {
          if(getpopular === 0){
            PopularshowsHandler()
          } else{
             setpage(1)
             setgetpopular([])
             PopularshowsHandler()
        
          }
      }
    
    
      useEffect(() => {
         refreshHandler()
      }, [category])
      
 

  return getpopular.length > 0 ? (
  
  <div className='w-screen h-screen overflow-hidden overflow-y-auto bg-gradient-to-r from-blue-400 via-pink-500 to-white flex flex-col gap-1 items-center'>

  <div className='px-[5%] mt-4 border-[1px] border-[#FEB8E7] h-[15%] w-[100%] bg-black rounded-md'>
    <div className='w-full flex items-center justify-between'>
      <h1 className='text-2xl font-normal text-zinc-100 mt-2'>
      <i onClick={() => Navigate(-1)} className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
      Popular<small className="ml-2 text-lg text-zinc-700">({category})</small>
      </h1>

      <div className='flex items-center w-[80%]'>
      <Topnav />
      <Dropdown title="Category" options={["MOVIES", "TV"]} func={(e) => setcategory(e.target.value)} />
      </div>
      
    </div>

  </div>

  <div className='border-[1px] border-[#FEB8E7] w-[100%] bg-black rounded-md'>

     <InfiniteScroll loader={<h1>Loading...</h1>} dataLength={getpopular.length} next={PopularshowsHandler} hasMore={hasMore}>
     <Cards data={getpopular} title={category} />
     </InfiniteScroll>

  </div>
</div>

  ): (
    <Loader />
  )
}

export default Popularpage