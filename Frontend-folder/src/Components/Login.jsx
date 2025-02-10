import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { userDataContext } from '../Context/UserContext';
import axios from 'axios';



const Login = () => {

  document.title = `WebFlix | Login`;

   const { setUser } = useContext(userDataContext);
   const Navigate = useNavigate();

   const [Email, setEmail] = useState("");
   const [Password, setPassword] = useState("");
  

   const submitHandler = async (e) => {
      e.preventDefault()
      
      const newUser = {
        email: Email,
        password: Password,
      }

      try {

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, newUser);

      if(response.status === 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        Navigate('/Home'); 
      }
        
      } catch(error){
        console.error("Login failed:", error);
      }

      setEmail('');
      setPassword('');
      
   };

    return (
      <>

          <div
            style={{
              background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url(posters.png)`,
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-screen h-screen flex items-center justify-center bg-cover bg-center font-['gilroy']"
            >
            <div className="w-[90%] h-[75vh] shadow-[2px_4px_4px_rgba(0,1,0,0.5)] bg-[#000000b8] border-[1px] border-white rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-white mb-8">Login</h1>
              <div>
              <form onSubmit={(e)=> {submitHandler(e)}} method="post" encType="multipart/form-data" 
               className="flex flex-col items-center gap-3 justify-center">
                  <input 
                  type="text" 
                  placeholder='Enter Email'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='focus:outline-none hover:border-pink-700 px-10 py-3 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-xl'
                  />

                  <input 
                  type="password" 
                  placeholder='Enter Password' 
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className='focus:outline-none hover:border-pink-700 px-10 py-3 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-xl'
                  />

                  <div className='w-full'>
                  <button className="w-full flex justify-center py-2 rounded-md shadow-sm text-xl font-semibold text-white bg-blue-600 border-[1px] border-black hover:border-white hover:bg-blue-300 hover:text-black">
                   Login
                  </button>
                  </div>
                  <h1 className='text-zinc-400 text-md font-normal'>OR</h1>
                  <div className='w-full'>
                  <button className="w-full flex justify-center py-2 px-28 border border-transparent rounded-md shadow-sm text-xl font-semibold text-black bg-white focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500">
                  <FcGoogle/>
                  </button>
                  </div>
              
              </form>
              <div className='flex items-center justify-center mt-2'>
                  <p className="text-white font-medium">
                    New to WebFlix?<Link to="/Signup" className='hover:text-pink-400 pl-1 hover:underline'>Sign up</Link>
                  </p>
              </div>
              </div>
            </div>
          </div>

        </>
      );
}

export default Login