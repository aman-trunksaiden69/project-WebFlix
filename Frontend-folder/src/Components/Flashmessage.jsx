import { useEffect, useState } from 'react'

const Flashmessage = ({Geterror, Errorkey, Duration = 4000}) => {
   
 const [Visible, setVisible] = useState(false)

 useEffect(() => {
    if (Geterror) {
        setVisible(true);
        const Time = setTimeout(() => setVisible(false), Duration);
        return () => clearTimeout(Time);
    }
}, [Geterror, Duration, Errorkey]);
    
  return (
    Visible && (
        <div className="absolute top-[2%] left-[75%] text-white text-center text-xl font-bold p-4 rounded-xl shadow-md max-md:w-[90vw] max-md:text-sm"
            style={{
                background: 'linear-gradient(135deg, #2563EB , #FFEBEE , #F4728E)',
                maxWidth: '90%',
                zIndex: 1000,
            }}
        >
            {Geterror}
            <button
                className="ml-4 text-sm text-[#fff]"
                onClick={() => setVisible(false)}
            >
                ✕
            </button>
        </div>
    )
    
  )
}

export default Flashmessage