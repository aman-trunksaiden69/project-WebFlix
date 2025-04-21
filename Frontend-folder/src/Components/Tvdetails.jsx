import { useEffect } from 'react'
import Loader from './Loader'
import Cardhorizon from './Templates/Cardhorizon'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams, Outlet } from 'react-router-dom'
import { asyncloadtvdata, removetvdata } from '../Store/Actions/TVaction'


const Tvdetails = () => {

  document.title = "WebFlix | Tv Streaming"

  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  const {info} = useSelector(state => state.tv)
 


  useEffect(() => {
     dispatch(asyncloadtvdata(id))

     return () => {
      dispatch(removetvdata())
     }
  }, [id])
  

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),
         rgba(0,0,0,.7), rgba(0,0,0,.9)), 
         url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="tvdetail relative w-screen h-screen p-2 overflow-auto overflow-x-hidden font-['gilroy']"
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-[65%] text-black flex items-center gap-7 rounded-lg p-2 mt-2 text-xl bg-[#ffffff80]">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-blue-400 ri-arrow-left-line"
        ></Link>{" "}
        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-white ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-white ri-earth-fill"></i>
        </a>
        <a
          className='hover:text-[#E2B616]'
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2 Poster and details */}
      <div className="relative w-full flex flex-col text-white bg-[#ffffff80] rounded-lg p-2 mt-2">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover  "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
  
        {/* Play Trailer and Watch Now buttons */}
        <div className='p-1 flex items-center justify-between'>
        <Link
          className="shadow-[2px_4px_4px_rgba(0,1,0,0.5)] absolute top-[94%] left-[1%] p-2 bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] font-medium rounded-lg hover:text-black hover:scale-105 duration-200"
          to={`${pathname}/trailer`}
        >
          {" "}
          <i className="text-xl mr-2 ri-play-fill"></i> 
          Play Trailer
        </Link>

        <Link
          className="shadow-[2px_4px_4px_rgba(0,1,0,0.5)] absolute top-[94%] left-[60%] p-2 bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] font-medium rounded-lg hover:text-black hover:scale-105 duration-200"
          to={`/tv/details${info.detail.id}/${info.detail.number_of_seasons}/${info.detail.number_of_episodes}/tvplayer`}
        >
          {" "}
          <i className="text-xl mr-2 ri-play-fill"></i> 
          Watch Now
        </Link>
        </div>
        

        <div className="content">
          <h1 className="text-3xl font-black mt-5 ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
             .
            <small className="text-xl font-bold text-black ">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <h1 className="text-md font-semibold italic text-black">
            Tagline: {info.detail.tagline ? info.detail.tagline : "No tagline" }
          </h1>

          <div className="mt-4 mb-3 flex flex-col items-start gap-2 ">

            <h1 className="w-[100px] font-semibold text-xl leading-6 ">
              User Score
            </h1>

            <div className='w-full gap-10 flex'>

            <div className='shadow-[2px_4px_4px_rgba(0,1,0,0.5)] text-white rounded-full font-semibold text-md w-[6.8vh] h-[6vh] border-[2px] border-black bg-yellow-500 flex justify-center items-center'>
            {(info.detail.vote_average * 10).toFixed()}
            <sup>%</sup>
           </div>
           
            <div className='flex flex-col w-[85%] gap-2 font-medium'>
            <h1>{info.detail.release_date ? info.detail.release_date : "No Release Date"}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime ? info.detail.runtime : "No Time Available"} min</h1>
            </div>

            </div>

          </div>

          <h1 className="text-xl mb-3 mt-3 font-semibold">Overview</h1>
          <p className='font-medium text-sm'>{info.detail.overview ? info.detail.overview : "No Overview"}</p>

          <h1 className="text-xl mb-3 mt-3 font-semibold">Languages</h1>
          <p className="mb-16 font-medium text-sm">{info.translations && info.translations.length > 0 ? info.translations.join(", ") : "No translation"}
          </p>
        </div>
      </div>

      {/* Part 3 Available on Platforms */}
      <div className="w-[70%] font-semibold flex flex-col gap-y-5 mt-4 bg-[#ffffff80] rounded-lg p-2">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-5 text-sm items-center text-white">
            <h1>Available on Plateforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-5 text-sm items-center text-white">
            <h1>Available on Buy</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-5 text-sm items-center text-white">
            <h1>Available to Rent</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md "
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      
      {/* Part 4 Seasons */}

      <hr className="mt-10 mb-5 border-none h-[2px] bg-[#ffffff80] " />

      <h1 className=" text-xl font-bold text-white">Seasons:</h1>
      <div className="season w-[100%] flex gap-2 overflow-y-hidden p-2 ">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div key={i} className="w-[60vh] mr-[1%]">
              <img
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[50vw] h-[40vh] cursor-pointer object-cover hover:scale-95 duration-100 "
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              />
              <h1 className=" text-md w-[120%] text-white mt-2 font-semibold">
                {info.detail.name ||
                  s.title ||
                  s.original_name ||
                  s.original_title}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl mt-5 text-white font-black text-center">
            Nothing to show
          </h1>
        )}

        {/* <HorizontalCards data={info.detail.seasons} /> */}
      </div>



      {/* Part 5 Recommendations and Similar Stuff */}

      <hr className="mt-10 mb-5 border-none h-[2px] bg-[#ffffff80] " />

      <h1 className=" text-xl mb-3 font-bold text-white">
        Recommendations & Must-Watch:
      </h1>
      <div className='flex items-center justify-center'>

      <Cardhorizon
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
        
      </div>

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}


export default Tvdetails