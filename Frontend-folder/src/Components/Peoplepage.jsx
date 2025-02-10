import { useNavigate } from "react-router-dom"
import axios from "../Utils/Axios"
import { useEffect, useState } from "react"
import Topnav from './Templates/Topnav'
import Cards from './Templates/Cards'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "./Loader"


const Peoplepage = () => {

    document.title = "WebFlix | Peoples"
    const Navigate = useNavigate()
    const [category, setcategory] = useState("popular")
    const [loading, setLoading] = useState(false);
    const [getpeople, setgetpeople] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    const [error, setError] = useState(null);


    const PeopleshowsHandler = async() => {

    if (loading) return; // Prevent multiple API calls while loading
    setLoading(true);

        try {
          const {data} = await axios.get(`/person/${category}?page=${page}`)
    
         if(data.results.length > 0){
          setgetpeople((prevState) => [...prevState, ...data.results])
          setpage(page+1)
         } else{
          sethasMore(false)
         }
      
        }catch (error) {
          setError("Error: People Data Unavailable!");
          console.error("Error: ", error);
         }finally {
          setLoading(false);
          }
       }
    
      const refreshHandler = () => {
          setError(null);
          if(getpeople.length === 0){
            PeopleshowsHandler()
          } else{
             setpage(1)
             setgetpeople([])
             PeopleshowsHandler()
        
          }
      }
    
    
      useEffect(() => {
         refreshHandler()
      }, [category])
      
 


  return getpeople.length > 0 ? ( 
  
  <div className='people w-screen h-screen overflow-hidden overflow-y-auto bg-gradient-to-r from-blue-400 via-pink-500 to-white flex flex-col gap-1 items-center'>

  <div className='h-[15%] w-[100%] bg-black'>
    <div className='w-full p-2 flex items-center justify-between'>
      <h1 className='text-xl font-normal text-white'>
      <i onClick={() => Navigate(-1)} className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
      Peoples
      </h1>
    </div>

  </div>

  <div className='w-[100%] bg-black'>

  <div className='w-full flex items-center justify-between'>
    
      <div className='flex items-center w-[100%]'>
      <Topnav />
      </div>
      
  </div>

     <InfiniteScroll loader={<h1>Loading...</h1>} dataLength={getpeople.length} next={PeopleshowsHandler} hasMore={hasMore}>
     <Cards data={getpeople} title="people" />
     </InfiniteScroll>

  </div>
</div>
  

  ): (
    <Loader />
  )
}

export default Peoplepage