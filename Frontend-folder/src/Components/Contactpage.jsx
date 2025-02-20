import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Contactpage = () => {

   document.title = "WebFlix | Contact"

   const Navigate = useNavigate()
   const [isOpen, setIsOpen] = useState(false);

   const toggleContent = () => {
    setIsOpen(!isOpen);
   };

   const [isVisible, setVisibility] = useState(false);

  const handleToggle = () => {
    setVisibility(!isVisible);
  };

   

  return (
    <div className='contact relative h-screen w-screen bg-gradient-to-r from-blue-300 via-pink-400 to-white font-["gilroy"] text-white'>
        <nav className='w-[100%] bg-black h-[15%] text-white flex'>
        <div className='flex items-center justify-center gap-2 w-[100%]'>
           <img className='w-[4vh] mb-1 rounded-md' src="/webflix1.jpg" alt=""/>
           <h1 className="anim flex items-center justify-center font-semibold gap-2 text-xl text-white">
            <span  style={{backgroundImage: 'url(image.gif)',}}
            className="space bg-center bg-cover text-transparent font-monument tracking-widest z-10 mix-blend-difference">
            WebFlix
            </span>
           </h1>
           <h1 className='text-md font-semibold'>
               | Help Center
           </h1>
        </div>
           
        </nav>

       <div className='h-[100%] w-[100%] text-black p-2'>
        <h1 className='text-md font-semibold'>
        <i onClick={() => Navigate(-1)} 
        className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
        Back to profile
        </h1>
         <h1 className='text-xl font-bold mt-10'>Contact us from the Webflix app</h1>
         <p className='text-sm font-medium mt-3 mb-3 w-[100%]'>
          To contact Webflix Customer Service through the Webflix app, you'll need to download 
          the app onto your iPhone, iPad, or Android smartphone or tablet. Calling from the 
          Webflix app requires a stable internet connection that uses Wi-Fi or cellular data.
         </p>

        <div className={`border-[1px] border-black rounded-md transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
        isOpen ? 'h-[37%]' : 'h-10'
      } w-[85%]`}
    >
      {/* Always visible setup the app and triangle */}
      <li className="font-semibold flex items-center cursor-pointer pt-2 pl-1" onClick={toggleContent}>
        <span
          className={`mr-2 inline-block transition-transform duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {/* Triangle icon */}
          <svg
            className="w-4 h-4 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <polygon points="12,5 19,19 5,19" />
          </svg>
        </span>
        Set up the app
      </li>

      {/* Content inside div that toggles */}
      <ol className={`pt-2 pl-4 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <li className="font-medium mt-2">
          Follow our setup steps to download the app on your iPhone, iPad, or iPod touch
        </li>
        <li className="font-medium mt-3">
          Follow our setup steps to download the app on your Android phone or tablet.
        </li>
      </ol>
        </div>

        <div
        className={`border-[1px] border-black rounded-md transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
        isVisible ? 'h-[80%]' : 'h-10'
      } w-[85%] mt-3`}
    >
      {/* Always visible part */}
      <li className="font-semibold flex items-center cursor-pointer pl-1 pt-2" onClick={handleToggle}>
        <span
          className={`mr-2 inline-block transition-transform duration-500 ${
            isVisible ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {/* Triangle icon */}
          <svg
            className="w-4 h-4 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <polygon points="12,5 19,19 5,19" />
          </svg>
        </span>
        Contact Webflix from the app
      </li>

      {/* Content inside div that toggles */}
      {isVisible && (
        <ul className={`pt-2 pl-7 transition-opacity duration-500 ease-in-out`}>
          <li className="font-medium mt-2">
            If you're a Webflix member, sign in to the Webflix app and follow these steps:
          </li>
          {/* Steps for Webflix member */}
          <ol className="list-decimal pl-10 mt-2">
            <li className="font-medium">In the lower right, tap My Webflix.</li>
            <li className="font-medium mt-2">In the upper right, tap the Menu.</li>
            <li className="font-medium mt-2">Tap Help.</li>
            <li className="font-medium mt-2">Tap the Call or Chat button.</li>
          </ol>

          <li className="font-medium mt-7">
            If you aren't a Webflix member, open the Webflix app and follow these steps:
          </li>
          {/* Steps for non-Webflix member */}
          <ol className="list-decimal pl-10 mt-2">
            <li className="font-medium">In the upper right, tap Help.</li>
            <li className="font-medium mt-2">Tap the Call or Chat button.</li>
          </ol>
        </ul>
      )}
        </div>

        <div className='h-[30%] w-[100%] mt-3'>
           <p className='text-sm w-[100%]'>Calling from the Netflix app when connected to a Wi-Fi or cellular data network is free,
              with no long-distance costs. Data rates over a cellular connection may apply,
              depending on your provider.
           </p>

           <hr className="mt-10 mb-4 border-none h-[1px] w-[100%] bg-black " />

           <h2 className='text-sm font-bold'>Was this article helpful?
            <span className='ml-2 cursor-pointer hover:text-white underline'>Yes</span>
            <span className='ml-2 cursor-pointer hover:text-white underline'>No</span>
           </h2>
        </div>

        <div className='h-[35%] w-[100%] bg-black rounded-tl-3xl rounded-tr-3xl'>
         <div className='flex items-center gap-4 p-3 ml-2'>
         <h1 className='text-white text-lg font-semibold'>Need more help?</h1>
         <button className='w-[120px] h-[35px] bg-white hover:text-blue-400 rounded-md text-sm text-black'>Contact Us</button>
         </div>
         <hr className="ml-4 border-none h-[0.5px] w-[90%] bg-[#ffffffc8]" />
         <div className='text-white p-5 flex items-center gap-7'>
          <div className='flex flex-col gap-2'>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline text-sm'>Terms of use</h1>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline text-sm'>Privacy</h1>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline text-sm'>Cookies preferences</h1>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline text-sm'>Corporate information</h1>
          </div>
          <div>
          <h1 className="anim flex items-center justify-center font-semibold gap-2 text-xl text-white">
         <span  style={{backgroundImage: 'url(image.gif)',}} className="space bg-center bg-cover text-transparent font-monument tracking-widest z-10 mix-blend-difference">
          WebFlix
         </span>
         </h1>
          </div>
         </div>
       </div>
       </div> 
    </div>
  )
   }

export default Contactpage