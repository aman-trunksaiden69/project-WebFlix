import axios from '../../Utils/Axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg';
import { userDataContext } from '../../Context/UserContext';


const Topnav = () => {

  const { user } = useContext(userDataContext);


  const [query, setquery] = useState('');
  const [searches, setsearches] = useState([]);
  const [isExpanded, setisExpanded] = useState(false);


  // Function to fetch search results data- 
  const getdata = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results || []);
    } catch (error) {
      console.error('Error fetching search data:', error);
    }
  };

  // Debounce effect to reduce API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) { // Check if query is not empty
        getdata();
      } else {
        setsearches([]); // Clear searches when query is empty
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  

  return (
    <div className="flex items-center gap-2 p-1 w-[100%] h-[10vh] rounded-lg relative">
      {/* Logo */}
      <div className="h-full flex items-center">
        <img className="h-9  rounded-md" src="/webflix1.jpg" alt="Webflix Logo" />
      </div>

      {/* Search Bar */}
      <div className="relative w-[75%] flex items-center">
        <i
          onClick={() => {
            setisExpanded(!isExpanded);
            if (isExpanded) {
              setquery(''); // Clear query
              setsearches([]); // Clear search results
            }
          }}
          className="text-zinc-100 text-2xl ri-search-line cursor-pointer"
        ></i>

        <div className="input flex items-center">
          <input
            onClick={() => setisExpanded(true)}
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className={`${
              isExpanded ? 'w-[80%] block' : 'w-0 hidden'
            } placeholder:text-zinc-100 hover:border-[1px] hover:border-zinc-100 text-zinc-100 font-["gilroy"] ml-1 px-2 placeholder:text-center py-1 text-md outline-none rounded-3xl bg-transparent transition-all duration-300`}
            type="text"
            placeholder="WebFlix Search"
          />
        </div>

        {/* Clear Button */}
        {isExpanded && query.length > 0 && (
          <i
            onClick={() => setquery('')}
            className="absolute right-0 text-zinc-100 hover:cursor-pointer text-2xl ri-close-line"
          ></i>
        )}

        {/* Search Results */}
        {isExpanded && searches.length > 0 && (
          <div className="z-[100] absolute w-[100%] max-h-[40vh] bg-black top-[100%] overflow-auto rounded-lg shadow-lg">
            {searches.map((s, i) => (
              <Link
                to={`/${s.media_type}/details/${s.id}`}
                key={i}
                className="hover:text-black hover:bg-zinc-100 duration-100 gap-1 hover:border-[#000] text-zinc-100 font-semibold flex justify-start items-center w-[100%] p-2 border-b-[1px] border-[#ffffffad]"
              >
                <img
                  className="w-[7vh] h-[7vh] rounded-full object-cover mr-3 shadow-lg"
                  src={
                    s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                      : noimage
                  }
                  alt={s.name || s.title || 'No Image'}
                />
                <span className="text-sm">{s.name || s.title || s.original_name || s.original_title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Profile Icon Placeholder */}
      <Link to="/Profile">
        <img 
          className='h-12 w-12 p-1 object-cover rounded-full border-white border-2' 
          src={user?.photo ? `${import.meta.env.VITE_BASE_URL}${user.photo}` : '/default-photo-url.jpg'} 
          alt="" />
      </Link>
    </div>
  );
};

export default Topnav;
