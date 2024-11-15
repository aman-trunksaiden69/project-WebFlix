import looploader from '/bubble.gif'
import textimg from '/image.gif'



const Loader = () => {

  

  return (
    <div className="relative w-screen h-screen bg-[#000]">
      <div id="main" className="flex flex-col items-center">
      <img className="w-[50%] object-cover" src={looploader} alt="broken" />
        <h2 className="absolute top-[40%] text-[#0C141D] font-bold font-['gilroy']">Loading...</h2> 
        <div id="cursor"></div>
        <h1 className="anim absolute top-[60%] text-9xl text-white">
         <span  style={{backgroundImage: 'url(image.gif)',}} className="space bg-center bg-cover text-transparent font-monument tracking-widest z-10 mix-blend-difference">
          WebFlix
         </span>
        </h1>

      </div>
    </div>
  )
}

export default Loader