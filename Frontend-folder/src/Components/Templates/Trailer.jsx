import React from "react";
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Notfound from "../Notfound";

const Trailer = () => {

  const navigate = useNavigate();
  const {pathname} = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const trailervideo = useSelector(state => state[category].info.videos);


return (

    <div className='bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center'>
        <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556cd] ri-close-fill text-3xl text-white right-[2%] top-[0%] ">
        </Link>
        {trailervideo ? (
            <ReactPlayer 
            controls
            height={600}
            width={500} 
            url={`https://www.youtube.com/watch?v=${trailervideo.key}`}
          />
        ): (<Notfound />)
        }
        
    </div>
  );
}

export default Trailer