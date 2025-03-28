import React, { useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { userDataContext } from '../Context/UserContext';
import { auth, provider } from '../Utils/firebase';
import { signInWithPopup } from 'firebase/auth';


const Registerpage = () => {

  document.title = `WebFlix | Signup`;

  

   const { setUser } = useContext(userDataContext);
   const Navigate = useNavigate();

   const [Email, setEmail] = useState("");
   const [Username, setUsername] = useState("");
   const [Age, setAge] = useState("");
   const [Password, setPassword] = useState("");

   
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    
  const newUser = {
    username: Username,
    email: Email,
    age: Age,
    password: Password,
  }

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser, {
    withCredentials: true,  //Cookies support
    headers: {
      'Content-Type': 'application/json'
    }
   }
  );

  console.log("Backend Response registerpage:", response);

  if(response.status === 201){
     const data = response.data;
     setUser(data.user)
     localStorage.setItem('token', data.token);
     Navigate('/Home');
  }


  setUsername("");
  setEmail("");
  setAge("");
  setPassword("");
  };

  const GoogleHandler = async () => {
    
    try {

      const response = await signInWithPopup(auth, provider)  
      console.log('Google-SignIn:', response);
      const user = response.user;  
      const userData = {
        username: user.displayName,
        email: user.email,
        photo: user.photoURL
      }

      const apiresponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/google-login`, userData, {
       withCredentials: true,
       headers: {
        'Content-Type': 'application/json',
       },
       
      });

      console.log("Backend Response:", apiresponse.data);

      if (apiresponse.status === 200) {
        const data = apiresponse.data;
        setUser(data.user);  // Save user info in context
        localStorage.setItem('token', data.token);   // Save token to local storage
        Navigate('/Profile');   // Redirect to Profile page
      } else {
        alert(apiresponse.data.message || "Login failed");
      }

      
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      alert("Login failed. Please try again.");
    }
    
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
            <div className="w-[90%] h-[85vh] shadow-[2px_4px_4px_rgba(0,1,0,0.5)] bg-[#0000006d] border-[1px] border-white rounded-xl flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-white mb-4">Sign up</h1>
              <div className='p-2'>
              <form onSubmit={HandleFormSubmit} className="flex flex-col items-center gap-3 justify-center">
                  <input 
                  type="text" 
                  placeholder='Username'
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className='focus:outline-none hover:border-pink-700 px-3 py-2 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-md'
                  />

                  <input 
                  type="email" 
                  placeholder='Email'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='focus:outline-none hover:border-pink-700 px-3 py-2 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-md'
                  />

                  <input 
                  type="number" 
                  placeholder='Age'
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className='focus:outline-none hover:border-pink-700 px-3 py-2 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-md'
                  />

                  <input 
                  type="password" 
                  placeholder='Password'  
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className='focus:outline-none hover:border-pink-700 px-3 py-2 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-md'
                  />

                  <div className='w-[100%]'>
                  <button className="w-full flex justify-center py-2 rounded-md shadow-sm text-md font-semibold text-white bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] hover:text-black hover:scale-105 duration-200">
                   Sign up
                  </button>
                  </div>
                  <h1 className='text-zinc-400 text-md font-normal'>OR</h1>
                  <div className='w-[99%]'>
                  <button onClick={GoogleHandler} className="w-full flex justify-center py-2 border border-transparent rounded-md shadow-sm text-xl font-semibold text-black bg-white focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500">
                  <FcGoogle/>
                  </button>
                  </div>
                  
              </form>

              <div className='flex justify-center items-center mt-2'>
                    <p className="text-white font-medium text-sm">
                      Already Have An Account?<Link to="/Login" className='hover:text-pink-400 pl-1 hover:underline'>Login</Link>
                    </p>
              </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default Registerpage