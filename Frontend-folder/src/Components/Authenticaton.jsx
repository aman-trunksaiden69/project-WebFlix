import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LOADER from './Loader';


const Authenticaton = ({children}) => {


    document.title = "WebFlix";

    const Navigate = useNavigate();

    const [Loader, setLoader] = useState(true);

    useEffect(() => {
        const Tokens = localStorage.getItem('token')
        if(!Tokens){
            Navigate('/Login')
        }else{
            setLoader(false); 
        }
    }, [Navigate])

    if (Loader) {
        // Display loader while checking token
        return <div className='w-screen h-screen bg-black'>
              <LOADER />
            </div>; 
      }
    

  return children;
}

export default Authenticaton