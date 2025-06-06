import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'


const Cardhorizon = ({data}) => {
  
  return <div className='cardhorizon p-1 w-[100%] flex h-[55vh] overflow-y-hidden border-[1px] border-pink-400 rounded-tl-3xl rounded-br-3xl'>
     
      {data.length > 0 ? data.map((d, i) => (
      <Link to={`/${d.media_type}/details/${d.id}`} key={i}
        className='min-w-[57%] h-full mr-3 bg-[#3F3F3F] rounded-tl-3xl rounded-br-3xl flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-2'>
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
        <p className='mt-2 mb-3 text-sm text-[#ffffffe0]'>
          {d.overview?.slice(0, 60)}...
          <span className="text-blue-300">more</span>
        </p>
        </div>
      </Link>
      
      )) : 
        <h1 className="text-2xl mt-5 bg-black text-white font-black text-center">
        Nothing to show
        </h1>
      } 

          
  </div>

}

export default Cardhorizon