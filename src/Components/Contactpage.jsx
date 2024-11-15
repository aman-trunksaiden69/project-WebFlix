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
    <div className='relative w-screen bg-gradient-to-r from-blue-400 via-pink-500 to-white h-screen font-["gilroy"] text-white'>
        <nav className='w-[100%] bg-black h-[15vh] text-white flex gap-20 p-5'>
        <div className='flex items-center justify-center gap-2 w-[30%]'>
           <img className='w-[8%] mb-1 rounded-md' src="/webflix1.jpg" alt=""/>
            <h1 className='text-3xl text-white font-bold'>
             <span>WebFlix</span>
            </h1> 
            <h1 className='text-xl font-semibold'>
               | Help Center
            </h1>
        </div>
           
        </nav>
       <div className='h-[100%] w-[100%] text-black p-8'>
        <h1 className='text-md font-medium'>
        <i onClick={() => Navigate(-1)} 
        className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
        Back to home
        </h1>
         <h1 className='text-4xl font-black tracking-wide mt-10'>Contact us from the Webflix app</h1>
         <p className='text-md font-medium mt-7 w-[60%]'>To contact Webflix Customer Service through the Webflix app, you'll need to download 
          the app onto your iPhone, iPad, or Android smartphone or tablet. Calling from the 
          Webflix app requires a stable internet connection that uses Wi-Fi or cellular data.
         </p>

        <div className={`border-[1px] border-black rounded-md transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
        isOpen ? 'h-32' : 'h-10'
      } w-[60%]`}
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
        isVisible ? 'h-[67%]' : 'h-10'
      } w-[60%] mt-2`}
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

        <div className='h-[40%] w-[100%] mt-2'>
           <p className='text-md w-[60%]'>Calling from the Netflix app when connected to a Wi-Fi or cellular data network is free,
              with no long-distance costs. Data rates over a cellular connection may apply,
              depending on your provider.
           </p>

           <hr className="mt-10 mb-5 border-none h-[1px] w-[60%] bg-black " />

           <h2 className='text-md font-bold'>Was this article helpful?
            <span className='ml-5 cursor-pointer hover:text-white underline'>Yes</span>
            <span className='ml-3 cursor-pointer hover:text-white underline'>No</span>
           </h2>
        </div>

        <div className='h-[53%] w-[100%] bg-black rounded-tl-3xl rounded-tr-3xl'>
         <div className='flex items-center gap-4 p-10'>
         <h1 className='text-white text-2xl font-semibold'>Need more help?</h1>
         <button className='w-[140px] h-[40px] bg-white hover:text-blue-400 rounded-md text-md text-black'>Contact Us</button>
         </div>
         <hr className="ml-10 border-none h-[0.5px] w-[90%] bg-[#ffffffc8]" />
         <div className='text-white p-10 flex flex-col gap-4 items-center justify-center'>
          <div className='flex gap-5'>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline'>Terms of use</h1>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline'>Privacy</h1>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline'>Cookies preferences</h1>
          <h1 className='hover:text-blue-400 cursor-pointer hover:underline'>Corporate information</h1>
          </div>
          <div>
          <h1 className='anim text-xl font-bold'>
            <span className='space'>WebFlix</span>
         </h1> 
          </div>
         </div>
       </div>
       </div> 
    </div>
  )
   }

export default Contactpage