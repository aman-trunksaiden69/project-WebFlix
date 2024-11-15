import React from 'react'

const Aboutpage = () => {

   document.title = "WebFlix | About"

  return (
    <div className='relative w-screen bg-black h-screen font-["gilroy"] text-white'>
        <nav className='w-[100%] bg-black h-[15vh] text-white flex items-center gap-20'>
        <div className='flex items-center justify-start gap-2 pl-7'>
           <img className='w-[8%] mb-1 rounded-md' src="/webflix1.jpg" alt=""/>
            <h1 className='anim text-3xl text-white font-bold'>
              <span className='space'>WebFlix</span>
            </h1>
        </div>
           <div className='flex gap-12 text-lg font-medium pr-5'>
           <h1 className='hover:text-purple-300 duration-100 hover:scale-110 cursor-pointer'>Impact</h1>
            <h1 className='hover:text-purple-300 duration-100 hover:scale-110 cursor-pointer'>Leadership</h1>
            <h1 className='hover:text-purple-300 duration-100 hover:scale-110 cursor-pointer'>Careers</h1>
            <h1 className='hover:text-purple-300 duration-100 hover:scale-110 cursor-pointer'>Resources</h1>
            <h1 className='hover:text-purple-300 duration-100 hover:scale-110 cursor-pointer'>Newsroom</h1>
           </div>
        </nav>

        <div className='video relative w-[100%] h-[100vh] object-cover'>
         <video width={1400} autoPlay loop muted src='./webflix video.mp4'/>
         <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-5xl font-semibold'
         >Stories move us.They make us feel more emotion, see new perspectives,
            and bring us closer to each other.
         </h1>
        </div>

        <div className='relative w-[100%] h-[100vh] bg-black text-white'>
            <h1 className='absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-center text-lg'>
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

            <h1 className='absolute top-[90%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-center text-6xl font-semibold'>
               The Story of Webflix
            </h1>
        </div>

        <div className='relative w-[100%] h-[100vh] bg-black text-white'>
          <div className='flex flex-col gap-6 p-3 w-[50%]  h-[100%] pt-8'>
            <div className='flex gap-3 w-[100%] h-[50%] overflow-hidden rounded-md'>
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg.jpg" alt="" />
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg2.jfif" alt="" />
            </div>
            <div>
              <h1 className='text-xl'>
               Back in 2012, when the idea of online streaming platforms was still taking shape, 
               I am, Arsalan, along with my friends Kunal, Ziya, Suhani, and Hanshika, set together
               to brainstorm something that would change the entertainment world.Our vision was clear: to provide people worldwide with access to all kinds of entertainment—movies, 
              documentaries, web series, and content across various genres. We wanted to create a platform that 
              would serve everyone, everywhere.
              </h1>
            </div>
      
          </div>
        </div>

        <div className='relative w-[100%] h-[100vh] bg-black text-white flex justify-end'>
          <div className='flex flex-col gap-6 p-3 w-[50%]  h-[100%] pt-8'>
            <div className='flex gap-3 w-[100%] h-[50%] overflow-hidden rounded-md'>
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg3.png" alt="" />
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg4.png" alt="" />
            </div>
            <div>
              <h1 className='text-xl'>
              We had a goal to build something bigger than ourselves, a platform that didn’t just deliver 
              content but curated an experience for people to enjoy from the comfort of their homes. 
              After endless nights of planning, brainstorming, and refining ideas, we came up with 
              the name Webflix. It was our answer to the global demand for online entertainment.
              </h1>
            </div>
      
          </div>
        </div>

        <div className='relative w-[100%] h-[100vh] bg-black text-white'>
          <div className='flex flex-col gap-6 p-3 w-[50%] h-[100%] pt-8'>
            <div className='flex gap-3 w-[100%] h-[50%] overflow-hidden rounded-md'>
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg5.jpg" alt="" />
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg6.jpg" alt="" />
            </div>
            <div>
              <h1 className='text-xl'>
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

        <div className='relative w-[100%] h-[100vh] bg-black text-white flex justify-end'>
          <div className='flex flex-col gap-6 p-3 w-[50%]  h-[100%] pt-8'>
          <div className='flex gap-3 w-[100%] h-[50%] overflow-hidden rounded-md'>
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg7.avif" alt="" />
            <img className='hover:scale-105 duration-100 h-[100%] w-[50%] object-fit rounded-md' src="./aboutimg8.avif" alt="" />
            </div>
            <div>
              <h1 className='text-xl'>
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

        <div className='relative w-[100%] h-[100vh] bg-black text-white'>
          <div className='text-6xl font-semibold p-8 pt-5'>
            <h1>New on Webflix</h1>
            <h1 className='text-blue-400 hover:text-white hover:underline text-5xl'>All Releases <i className="ri-arrow-right-line"></i></h1>
          </div>
      
          <div className='cardhorizon w-[100%] flex h-[65vh] p-2 pt-10 overflow-y-hidden'>
   
            <div className='min-w-[25%] h-full mr-5 bg-zinc-900 flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-3'>
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

            <div className='min-w-[25%] h-full mr-5 bg-zinc-900 flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-3'>
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

            <div className='min-w-[25%] h-full mr-5 bg-zinc-900 flex flex-col hover:scale-105 duration-150 hover:cursor-pointer gap-3'>
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
           <div className=' bg-black w-[100%] h-[50%]'>
           <h1 className='anim absolute top-[10%] left-[16%] text-[150px] text-white font-bold'>
              <span className='space'>WebFlix</span>
           </h1>
           </div>

           <div className='relative bg-gradient-to-r from-blue-400 via-pink-500 to-white w-[100%] h-[50%]'>
            <div className='p-8 w-[85%]'>
                <h1 className='text-xl font-black text-black'>Quotes-</h1>
               <p className='text-md w-[40%] font-medium text-[#1E1E1E]'>
               "Bringing the world together, one story at a time. At Webflix, entertainment knows no boundaries."
               <br></br>
               -TRUNKS~
               </p>
                
               <h1 className='text-xl font-black text-black mt-7'>Our Services at Webflix</h1>
               <p className='text-sm w-[55%] font-medium text-[#1E1E1E]'>
               At Webflix, we pride ourselves on offering a wide range of services that cater to the 
               diverse entertainment needs of our global audience. From casual movie lovers to 
               binge-watchers, we’ve designed our platform to ensure everyone can find something to
               enjoy, all while providing seamless access to the best content available.
               </p>

               <div className='absolute top-[10%] left-[55%] text-black font-bold flex flex-col gap-4'>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Entertainment</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Account</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Careers</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Services</h1>
               </div>

               <div className='absolute top-[10%] left-[70%] text-black font-bold flex flex-col gap-4'>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Blogs</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>FAQs</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Contact us</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Members</h1>
               </div>

               <div className='absolute top-[10%] left-[85%] text-black font-bold flex flex-col gap-4'>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Investors</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Newsroom</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Accessibility</h1>
               <h1 className='hover:scale-105 cursor-pointer hover:text-white duration-100'>Work with us</h1>
               </div>

              <div className=' absolute top-[75%] left-[55%] w-[38%] h-[20%] border-t-[2px] border-black flex gap-3'>
               <p className='text-[#1E1E1E] text-[11px]'>Copyright © 2024 Webflix Inc. All rights reserved.</p>
               <p className='text-white font-bold text-[15px]'>Terms of Use | Legal | Site Map</p>
              </div>

              <div className=' absolute top-[90%] left-[55%] w-[38%] h-[20%] flex gap-3 text-4xl justify-between'>
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