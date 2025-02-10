import React from 'react'

const Aboutpage = () => {

   document.title = "WebFlix | About"

  return (
    <div className='about relative p-2 bg-black w-screen h-screen font-["gilroy"] text-white overflow-auto overflow-x-auto'>
      <nav className='flex w-[100%] bg-black h-[10vh] text-white items-center justify-center'>
        <h1 className="anim flex items-center justify-center text-3xl">
         <span  style={{backgroundImage: 'url(image.gif)',}} className="space bg-center bg-cover text-transparent font-monument tracking-widest z-10 mix-blend-difference">
          WebFlix
         </span>
        </h1>
      </nav>

      <div className='sidebar flex bg-[#18181B] mb-6 text-lg gap-1 overflow-auto overflow-x-auto rounded-md'>
            <div to="/Trendingpage" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            Impact
            </div>
            <div to="/Popularpage" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            Leadership
            </div>
            <div to="/movie" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            Careers
            </div>
            <div to="/tv" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            Resources
            </div>
            <div to="/Peoplepage" className='hover:bg-blue-400 hover:text-black duration-300 rounded-md p-3'>
            Newsroom
            </div>
      </div>

        <div className='relative h-[70vh]'>
         <video 
          className='object-cover h-full' 
          autoPlay 
          loop 
          muted 
          src='./webflix video.mp4'
         />

         <div className='absolute top-[40%] h-[15vh] w-full'>
         <h1 className='p-2 text-center text-lg font-semibold'
         >Stories move us.They make us feel more emotion, see new perspectives,
            and bring us closer to each other.
         </h1>
         </div>
         
        </div>

        <div className='relative w-[100%] h-[60vh] text-white'>
            <h1 className='text-md mt-4'>
               At Webflix, we want to entertain the world. Whatever your taste, 
                and no matter where you live, we give you access to 
                best-in-className TV series, documentaries and feature 
                films. Our members control what they 
                want to watch, when they want it, in one simple
                subscription. We’re streaming in more than 30 
                languages and 190 countries, because great 
                stories can come from anywhere and be loved 
                everywhere. We are the world’s biggest fans
                of entertainment, and we’re always looking
                to help you find your next favorite story.
            </h1>

            <h1 className='text-center mt-10 text-3xl font-semibold'>
               The Story of Webflix
            </h1>
        </div>

        <div className='relative flex flex-col items-center justify-center w-[100%] h-[80vh] text-white'>
          <div className='flex flex-col gap-5 w-[100%] h-[90%]'>
          <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg.jpg" alt="" />
          <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg2.jfif" alt="" />
          </div>
        </div>

        <div className='mt-2'>
              <h1 className='text-md'>
               Back in 2012, when the idea of online streaming platforms was still taking shape, 
               I am, Arsalan, along with my friends Kunal, Ziya, Suhani, and Hanshika, set together
               to brainstorm something that would change the entertainment world.Our vision was clear: to provide people worldwide with access to all kinds of entertainment—movies, 
              documentaries, web series, and content across various genres. We wanted to create a platform that 
              would serve everyone, everywhere.
              </h1>
        </div>

        <div className='relative w-[100%] h-[100vh] bg-black text-white flex items-center justify-center'>
          <div className='flex flex-col gap-5 w-[100%] h-[90%]'>
          <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg3.png" alt="" />
          <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg4.png" alt="" />
          </div>
        </div>

        <div className='mt-2'>
              <h1 className='text-md'>
              We had a goal to build something bigger than ourselves, a platform that didn’t just deliver 
              content but curated an experience for people to enjoy from the comfort of their homes. 
              After endless nights of planning, brainstorming, and refining ideas, we came up with 
              the name Webflix. It was our answer to the global demand for online entertainment.
              </h1>
        </div>
        

        <div className='relative w-[100%] h-[100vh] bg-black text-white'>
          <div className='flex flex-col w-[100%] h-[100%]'>
            <div className='flex flex-col gap-3 pt-5 w-[100%] h-[70%] overflow-hidden rounded-md'>
            <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg5.jpg" alt="" />
            <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg6.jpg" alt="" />
            </div>

            <div className='mt-2'>
              <h1 className='text-md'>
              Kunal was instrumental in the technical foundation of Webflix. His knowledge in coding and tech 
              infrastructure laid the groundwork for what would become our platform. Ziya brought a creative 
              edge to the table, ensuring that Webflix had a vibrant and engaging user experience, making 
              sure users kept coming back. Suhani’s role in managing partnerships and licensing made it 
              possible for us to secure diverse content from around the globe. Hanshika, with her 
              business acumen, was pivotal in strategizing our growth into international markets. 
              Together, we built not just a company, but a vision.
              </h1>
            </div>
      
          </div>
        </div>

        <div className='relative w-[100%] h-[100vh] bg-black text-white'>
          <div className='flex flex-col w-[100%] h-[100%]'>
          <div className='flex flex-col gap-3 pt-5 w-[100%] h-[70%] overflow-hidden rounded-md'>
            <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg7.avif" alt="" />
            <img className='hover:scale-105 duration-100 w-[100%] h-[50%] object-fit rounded-md' src="./aboutimg8.avif" alt="" />
          </div>

            <div className='mt-2'>
              <h1 className='text-md'>
              Today, Webflix stands tall as a multinational corporation, serving millions of users with a 
              variety of subscription plans, including monthly premium services that allow access to 
              exclusive content. Our journey from a small startup to a global giant wasn’t easy, 
              but with dedication and a united goal, we made it possible.

              This is our story—one that began with a dream and continues to grow, delivering entertainment
              to every corner of the world.
              </h1>
            </div>
      
          </div>
        </div>

        <div className='relative w-[100%] h-[90vh] bg-black text-white'>
          <div className='text-3xl font-semibold pt-10'>
            <h1>New on Webflix</h1>
            <h1 className='text-blue-400 hover:text-white hover:underline text-2xl'>
              All Releases 
              <i className="ri-arrow-right-line"></i>
            </h1>
          </div>
      
          <div className='cardhorizon w-[100%] flex h-[65vh] pt-5 overflow-y-hidden'>
   
            <div className='min-w-[100%] h-full mr-5 bg-zinc-900 flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-3'>
               <img className='w-full h-[55%] object-cover' src="./aboutimg9.avif" alt="broken"/>
                <div className='p-2'>
                <h1 className="text-lg font-bold text-pink-400">
                 Our Culture
                </h1>
                <p className='text-sm'>
                At Webflix, we have an amazing and unique employee culture. Find out first-hand 
                what it’s really like to work here, and to learn more about our company values.
                <span className="text-blue-300">
                  Learn more
                  <i className="ri-arrow-right-line"></i>
                  </span>
                </p>
               </div>
            </div> 

            <div className='min-w-[100%] h-full mr-5 bg-zinc-900 flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-3'>
               <img className='w-full h-[55%] object-cover' src="./aboutimg10.jpg" alt="broken"/>
                <div className='p-2'>
                <h1 className="text-lg font-bold text-pink-400">
                 Investor Relation
                </h1>
                <p className='text-sm'>
                Want to invest with us? Get more information about our governance,
                our latest earnings, and our long-term view on what’s ahead.
                <span className="text-blue-300">
                  Learn more
                  <i className="ri-arrow-right-line"></i>
                  </span>
                </p>
               </div>
            </div> 

            <div className='min-w-[100%] h-full mr-5 bg-zinc-900 flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-3'>
               <img className='w-full h-[55%] object-cover' src="./aboutimg11.jpg" alt="broken"/>
                <div className='p-2'>
                <h1 className="text-lg font-bold text-pink-400">
                 Careers
                </h1>
                <p className='text-sm'>
                Want to come work with us? Get more information about our teams,
                locations, culture and to hear more from our employees.
                <span className="text-blue-300">
                  Learn more
                  <i className="ri-arrow-right-line"></i>
                  </span>
                </p>
               </div>
            </div> 
          
          </div>
         
        </div>

        <div className='relative w-[100%] h-[100vh] bg-black text-white flex flex-col'>
          <div className=' bg-black w-[100%] h-[10%]'>
           <h1 className="anim flex items-center justify-center gap-2 text-2xl text-white">
            <span  style={{backgroundImage: 'url(image.gif)',}} className="space bg-center bg-cover text-transparent font-monument tracking-widest z-10 mix-blend-difference">
             WebFlix
            </span>
           </h1>
          </div>

           <div className='relative bg-gradient-to-r from-blue-400 via-pink-500 to-white w-[100%] h-[100%]'>
            <div className='p-2 h-[85%]'>
              <h1 className='text-md font-black text-black'>Quotes-</h1>
               <p className='text-sm font-medium text-[#1E1E1E]'>
               "Bringing the world together, one story at a time. At Webflix, entertainment knows no boundaries."
               <br></br>
               -TRUNKS~
               </p>
                
               <h1 className='text-md font-black text-black mt-4'>Our Services at Webflix</h1>
               <p className='text-sm font-medium text-[#1E1E1E]'>
               At Webflix, we pride ourselves on offering a wide range of services that cater to the 
               diverse entertainment needs of our global audience. From casual movie lovers to 
               binge-watchers, we’ve designed our platform to ensure everyone can find something to
               enjoy, all while providing seamless access to the best content available.
               </p>

               <div className='absolute top-[48%] left-[2%] text-black font-bold flex flex-col gap-4'>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Entertainment</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Account</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Careers</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Services</h1>
               </div>

               <div className='absolute top-[48%] left-[40%] text-black font-bold flex flex-col gap-4'>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Blogs</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>FAQs</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Contact us</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Members</h1>
               </div>

               <div className='absolute top-[48%] left-[70%] text-black font-bold flex flex-col gap-4'>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Investors</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Newsroom</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Accessibility</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Work with us</h1>
               </div>

              <div className='absolute top-[91%] left-[2%] w-[95%] h-[20%] border-t-[2px] border-black flex flex-col gap-1'>
              <p className='text-white font-bold text-[15px]'>Terms of Use | Legal | Site Map</p>
               <p className='text-[#1E1E1E] text-[12px]'>Copyright © 2024 Webflix Inc. All rights reserved.</p>
              </div>

              <div className='absolute top-[79%] left-[0%] w-[100%] h-[10%] p-2 flex items-center text-3xl justify-between'>
              <i className="hover:text-pink-600 ri-instagram-line"></i>
              <i className="hover:text-blue-600 ri-twitter-fill"></i>
              <i className="hover:text-red-600 ri-youtube-line"></i>
              <i className="hover:text-purple-900 ri-facebook-box-line"></i>
              </div>
               
            </div>

           </div>
         
         
        </div>

    </div>
  )
}

export default Aboutpage