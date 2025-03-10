import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { userDataContext } from '../Context/UserContext';
import axios from 'axios';
import { auth, provider } from '../Utils/firebase';
import { signInWithPopup } from 'firebase/auth';


const Login = () => {

  document.title = `WebFlix | Login`;

  const { user, setUser } = useContext(userDataContext);
  console.log('userData:', user);
  

  const Navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const newUser = {
      email: Email,
      password: Password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, newUser, {
        headers: {
          "Content-Type": "application/json"  //JSON format
        }
      });

      if (response.status === 200) {
        const data = response.data;
        console.log("Login Response:", data);
        setUser(data?.user || null);
        localStorage.setItem('token', data.token);
        Navigate('/Home');
      }else{
        localStorage.removeItem('token');
        setError(response.data?.message || "Login failed");
      }

    } catch (error) {
      localStorage.removeItem('token');
      console.error("Login failed:", error.response || error.message);
      setError("Login failed. Please check your credentials.");
    }

    setEmail('');
    setPassword('');
  };

  const GoogleHandler = async () => {
    
    try {

      const response = await signInWithPopup(auth, provider)  
      console.log('Google-SignIn:', response);


      const user = response.user;  
      const userData = {
        username: user.displayName,
        email: user.email,
        photo: user.photoURL,
        isGoogleUser: true
      }

      const apiresponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/google-login`, userData, {
       withCredentials: true,
       headers: {
        'Content-Type': 'application/json',
       },
       
      });

      console.log("Backend Response:", apiresponse.data);

      if (apiresponse.status === 200) {
        const { token, user } = apiresponse.data;
        setToken(token)   //Save token to local storage
        setUser(user);  //Save user info in context
        Navigate('/Profile');   // Redirect to Profile page
      } else {
        setToken('');
        alert(apiresponse.data.message || "Login failed");
      }

      
    } catch (error) {
      setToken('');
      console.error("Error during Google Sign-In:", error?.response?.data || error.message);
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
        <div className="w-[90%] h-[75vh] shadow-[2px_4px_4px_rgba(0,1,0,0.5)] bg-[#0000006d] border-[1px] border-white rounded-xl flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white mb-8">Login</h1>
          <div className='p-2'>
            <form onSubmit={submitHandler} method="post" encType="multipart/form-data" 
             className="flex flex-col items-center gap-3 justify-center">
              <input 
                type="text" 
                placeholder='Enter Email'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='focus:outline-none hover:border-pink-700 px-3 py-2 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-md'
              />

              <input 
                type="password" 
                placeholder='Enter Password' 
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className='focus:outline-none hover:border-pink-700 px-3 py-2 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-md'
              />

              {error && <div className="text-red-600 text-sm">{error}</div>}  {/* Display error */}

              <div className='w-[100%]'>
                <button className="w-full flex justify-center py-2 rounded-md shadow-sm text-md font-semibold text-white bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] hover:text-black hover:scale-105 duration-200">
                  Login
                </button>
              </div>
              <h1 className='text-zinc-400 text-md font-normal'>OR</h1>
              <div className='w-[99%]'>
                <button onClick={GoogleHandler} className="w-full flex justify-center py-2 border border-transparent rounded-md shadow-sm text-xl font-semibold text-black bg-white focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500">
                  <FcGoogle />
                </button>
              </div>
            </form>
            <div className='flex items-center justify-center mt-2'>
              <p className="text-white font-medium text-sm">
                New to WebFlix?<Link to="/Signup" className='hover:text-pink-400 pl-1 hover:underline'>Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
