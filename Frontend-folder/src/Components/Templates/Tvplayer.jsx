import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Notfound';

const Tvplayer = () => {

    document.title = "WebFlix | Watch TV";

    const Navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes('movie') ? 'movie' : 'tv';
    const tvid = useSelector(state => state.[category].info.detail.id);
    const tveid = useSelector(state => state.[category].info.detail.number_of_episodes);
    const tvsid = useSelector(state => state.[category].info.detail.number_of_seasons);


  return (
    <div className="absolute overflow-hidden w-screen h-screen flex items-center justify-center bg-[#000000f5] top-0 left-0">
    <Link
      onClick={() => Navigate(-1)}
      className="hover:text-[#6556CD] absolute text-2xl top-[5%] right-[5%] ri-close-fill"
    ></Link>
  {tvid ?  
  
  <iframe src={`https://www.2embed.stream/embed/tv/${tvid}/${tvsid}/${tveid}`} className="w-full h-full m-2"></iframe>
    :(
      <Notfound />
    )}
  
  </div>
  )
}

export default Tvplayer