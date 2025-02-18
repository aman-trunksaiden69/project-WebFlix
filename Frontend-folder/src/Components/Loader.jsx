import looploader from '/bubble.gif'


const Loader = () => {  
  

  return (
    <div className="relative w-screen h-screen bg-[#000]">
      <div id="main" className="flex flex-col items-center">
      <img className="w-[80%] h-[90vh] object-cover" src={looploader} alt="broken" />
        <h2 className="absolute top-[45%] text-[#000] font-bold font-['gilroy']">
          Loading...
        </h2> 
        <h1 className="anim absolute top-[80%] z-20 text-5xl text-white">
         <span  style={{backgroundImage: 'url(/image.gif)',}} className="space bg-center bg-cover text-transparent font-['monument'] tracking-wider mix-blend-difference">
          WebFlix
         </span>
        </h1>

      </div>
    </div>
  )
}

export default Loader