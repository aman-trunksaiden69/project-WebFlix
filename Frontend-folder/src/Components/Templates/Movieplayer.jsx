import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Notfound from '../Notfound';

const Movieplayer = () => {

    document.title = "WebFlix | Watch Movies"

    const Navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes('movie') ? 'movie' : 'tv';
    const movieid = useSelector(state => state[category].info.externalid.id);

    //Fetching movie data from API-
    const FetchMoviesData = async () => {
      const moviedata = await axios.get(` https://www.2embed.skin//embed/950396`);
      console.log("Movies data:-", moviedata);
    };

    FetchMoviesData();

  return (
    <div className="absolute overflow-hidden w-screen h-screen flex items-center justify-center bg-[#000000f5] top-0 left-0">
          <Link
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556CD] absolute text-2xl top-[5%] right-[5%] ri-close-fill text-white"
          ></Link>
        {movieid ?  
        
        <iframe src={`https://www.2embed.stream/embed/movie/${movieid}`}  className="w-full h-full m-2"></iframe>
          :(
            <Notfound/>
          )}
        
        </div>
  )
}

export default Movieplayer