import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'


const Cardhorizon = ({data}) => {
  
  return <div className='w-screen h-[50vh] font-["gilroy"] p-2 flex items-center'>
 
    <div className='cardhorizon w-[100%] flex h-[50vh] overflow-y-hidden border-[1px] border-pink-400 rounded-tl-3xl rounded-br-3xl'>
     
      {data.length > 0 ? data.map((d, i) => (
      <Link to={`/${d.media_type}/details/${d.id}`} key={i}
        className='min-w-[57%] h-full mr-3 bg-[#212121] rounded-tl-3xl rounded-br-3xl flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-2'>
        <img className='w-full h-[50%] object-cover rounded-tl-3xl' 
            src={d.poster_path || d.backdrop_path ? `https://image.tmdb.org/t/p/original/${
              d.poster_path ||d.backdrop_path
            }` : noimage} 
            alt="broken"
        />
        <div className='p-2'>
        <h1 className="text-md font-black text-white">
            {d.name || d.title || d.original_name || d.original_title}
        </h1>
        <p className='mt-3 mb-3 text-white'>
          {d.overview?.slice(0, 60)}...
          <span className="text-blue-300">more</span>
        </p>
        </div>
      </Link>
      
      )) : 
        <h1 className="text-3xl mt-5 text-white font-black text-center">
        Nothing to show
        </h1>} 

          
    </div>

  </div>
}

export default Cardhorizon