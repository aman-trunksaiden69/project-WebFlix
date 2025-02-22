import { useEffect } from 'react'
import Loader from './Loader'
import Cardhorizon from './Templates/Cardhorizon'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams, Outlet } from 'react-router-dom'
import { asyncloadmoviedata, removemoviedata } from '../Store/Actions/Movieaction'


const Moviedetails = () => {

  document.title = "WebFlix"

  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch()
  const {info} = useSelector(state => state.movie)
 


  useEffect(() => {
     dispatch(asyncloadmoviedata(id))

     return () => {
      dispatch(removemoviedata())
     }
  }, [id])
  

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="moviedetail relative w-screen h-screen overflow-auto overflow-x-hidden p-2 font-['gilroy']"
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-[65%] text-black bg-[#ffffff80] flex items-center gap-7 text-xl rounded-lg p-2 mt-2">
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
          className="shadow-[2px_4px_4px_rgba(0,1,0,0.5)] h-[50vh] object-cover  "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        
        <Link
            className="shadow-[2px_4px_4px_rgba(0,1,0,0.5)] absolute top-[94%] left-[60%] p-2 bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] font-medium rounded-lg hover:text-black hover:scale-105 duration-200"
            to={`${pathname}/trailer`}
          >
            {" "}
            <i className="text-xl mr-3 ri-play-fill"></i> Play Trailer
        </Link>
       
        <div className="content">
          <h1 className="text-3xl font-black mt-5">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
             .
            <small className="text-xl font-bold text-black ">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <h1 className="text-md font-semibold italic text-black">
            Tagline: {info.detail.tagline ? info.detail.tagline : "No tagline" }
          </h1>

          <div className="mt-4 mb-3 flex flex-col items-start gap-2 ">

            <h1 className="w-[100px] font-semibold text-xl leading-6 ">
              User Score
            </h1>

            <div className='w-full flex gap-3'>

            <div className='shadow-[2px_4px_4px_rgba(0,1,0,0.5)] text-white rounded-full font-semibold text-md w-[6.3vh] h-[6vh] border-[2px] border-black bg-yellow-500 flex justify-center items-center'>
            {(info.detail.vote_average * 10).toFixed()}
            <sup>%</sup>
            </div>

            <div className='flex flex-col w-[65%] gap-2 font-medium'>
            <h1>{info.detail.release_date ? info.detail.release_date : "No Release Date"}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",").slice(0, 34)}</h1>
            <h1>{info.detail.runtime ? info.detail.runtime : "No Time Available"}min</h1>
            </div>

            </div>

          </div>


          <h1 className="text-xl mb-3 mt-3 font-semibold">Overview</h1>
          <p className='font-medium text-sm'>{info.detail.overview ? info.detail.overview : "No Overview"}</p>

          <h1 className="text-xl mb-3 mt-3 font-semibold">Movie Translated</h1>
          <p className="mb-16 font-medium text-sm">{info.translations && info.translations.length > 0 ? info.translations.join(", ") : "No translation"}</p>

         
        </div>
      </div>

      {/* Part 3 Available on Platforms */}
      <div className="w-[100%] font-semibold flex flex-col gap-y-5 mt-4 bg-[#ffffff80] rounded-lg p-2">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-4 text-sm items-center text-white">
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
          <div className="flex gap-x-4 text-sm items-center text-white">
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
          <div className="flex gap-x-4 text-sm items-center text-white">
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

      {/* Part 4 Recommendations and Similar Stuff */}

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


export default Moviedetails