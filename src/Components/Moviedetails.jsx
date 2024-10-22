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
      className="relative w-screen h-screen px-[10%] overflow-auto pb-10 font-['gilroy']"
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-[20%] text-black bg-[#ffffff70] flex items-center gap-7 font-xl rounded-lg p-2 mt-2">
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

      <div className="relative w-full flex text-white bg-[#ffffff70] rounded-lg p-2 mt-2">
        <img
          className="shadow-[2px_4px_4px_rgba(0,1,0,0.5)] h-[50vh] object-cover  "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        
        <Link
            className="shadow-[2px_4px_4px_rgba(0,1,0,0.5)] absolute top-[75%] left-[2.5%] p-5 bg-blue-700 font-medium rounded-lg hover:bg-blue-400 hover:scale-110 duration-75"
            to={`${pathname}/trailer`}
          >
            {" "}
            <i className="text-xl mr-3 ri-play-fill"></i> Play Trailer
          </Link>
       
        <div className="content ml-[5%]">
          <h1 className="text-5xl font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
             .
            <small className="text-2xl font-bold text-black ">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <h1 className="text-xl font-semibold italic mt-1 text-black">
            Tagline: {info.detail.tagline ? info.detail.tagline : "No tagline" }
          </h1>

          <div className="mt-3 mb-5 flex flex-col items-start gap-2 ">

            <h1 className="w-[100px] font-semibold text-lg leading-6 ">
              User Score
            </h1>

            <div className='shadow-[2px_4px_4px_rgba(0,1,0,0.5)] text-white rounded-full font-semibold text-md w-[6.3vh] h-[6vh] border-[2px] border-black bg-yellow-500 flex justify-center items-center'>
            {(info.detail.vote_average * 10).toFixed()}
            <sup>%</sup>
            </div>

            <div className='flex w-[65%] gap-2 font-medium'>
            <h1>{info.detail.release_date ? info.detail.release_date : "No Release Date"}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime ? info.detail.runtime : "No Time Available"}min</h1>
            </div>
          </div>


          <h1 className="text-2xl mb-3 mt-5 font-semibold">Overview</h1>
          <p className='font-medium'>{info.detail.overview ? info.detail.overview : "No Overview"}</p>

          <h1 className="text-2xl mb-3 mt-5 font-semibold">Movie Translated</h1>
          <p className="font-medium">{info.translations && info.translations.length > 0 ? info.translations.join(", ") : "No translation"}</p>

         
        </div>
      </div>

      {/* Part 3 Available on Platforms */}
      <div className="w-[70%] font-semibold flex flex-col gap-y-5 mt-4 bg-[#ffffff70] rounded-lg p-2">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
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
          <div className="flex gap-x-10 items-center text-white">
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
          <div className="flex gap-x-10 items-center text-white">
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

      <hr className="mt-10 mb-5 border-none h-[2px] bg-[#ffffff70] " />

      <h1 className=" text-2xl font-bold text-white">
        Recommendations & Must-Watch:
      </h1>
      <Cardhorizon
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}


export default Moviedetails