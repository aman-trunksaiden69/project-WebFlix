import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeopledata, removepeopledata } from "../Store/Actions/Peopleaction";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cardhorizon from "./Templates/Cardhorizon";
import Loader from "./Loader";
import Dropdown from "./Templates/Dropdown";

const Peopledetails = () => {
  
  document.title = "People Details | Peoples";

  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadpeopledata(id));
    return () => {
      dispatch(removepeopledata());
    };
  }, [dispatch, id]);


  return info ? (
    <div className="relative w-screen h-screen overflow-auto overflow-x-hidden p-2 font-['gilroy']">

      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-[65%] text-black bg-[#ffffff70] flex items-center gap-7 text-xl rounded-lg p-2 mt-2">
        <Link onClick={() => navigate(-1)} 
         className="hover:text-[#6556cd] ri-arrow-left-line"></Link>
      </nav>

      <div className="w-full flex">
        {/* Part 2 Left Poster and Details */}
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover"
            src={info.detail.profile_path
              ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}`
              : "https://via.placeholder.com/150"}
            alt={info.detail.name || "No Image Available"}
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/* Social Media Links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a target="_blank" rel="noopener noreferrer" href={info.externalid?.wikidata_id ? `https://wikidata.org/wiki/${info.externalid.wikidata_id}` : "#"}>
              <i className="ri-earth-fill"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={info.externalid?.facebook_id ? `https://www.facebook.com/${info.externalid.facebook_id}` : "#"}>
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={info.externalid?.instagram_id ? `https://www.instagram.com/${info.externalid.instagram_id}` : "#"}>
              <i className="ri-instagram-fill"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={info.externalid?.twitter_id ? `https://www.twitter.com/${info.externalid.twitter_id}` : "#"}>
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* Personal Information */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">Person Info</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department || "N/A"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400">{info.detail.birthday || "Unknown"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Deathday</h1>
          <h1 className="text-zinc-400">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Place of Birth</h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth || "N/A"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Also Known As</h1>
          <h1 className="text-zinc-400">{info.detail.also_known_as?.length > 0 ? info.detail.also_known_as.join(", ") : "N/A"}</h1>
        </div>

        {/* Part 3 Right Details and Information */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5">{info.detail.name}</h1>

          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="text-zinc-400 mt-3">{info.detail.biography || "No biography available."}</p>

          <h1 className="text-lg mt-5 text-zinc-400 font-semibold">Known For</h1>
          <Cardhorizon data={info.combinedCredits?.cast || []} />

          <div className="w-full flex justify-between">
            <h1 className="text-xl mt-5 text-zinc-400 font-semibold">Acting</h1>
            <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setcategory(e.target.value)} />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">
            {info[category + "Credits"]?.cast?.length > 0 ? (
              info[category + "Credits"].cast.map((c, i) => (
                <li key={i} className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer">
                  <Link to={`/${category}/details/${c.id}`}>
                    <span>{c.name || c.title || c.original_name || c.original_title}</span>
                    {c.character && <span className="block ml-5 mt-2">Character Name: {c.character}</span>}
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-zinc-400">No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Peopledetails;
