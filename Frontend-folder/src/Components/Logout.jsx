import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const Navigate = useNavigate();
  const Token = localStorage.getItem('token');


  axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,{
     headers: {
       Authorization: `Bearer ${Token}`
    }
  }).then((response) => {

    if(response.status === 200){
      localStorage.removeItem('token');
      Navigate('/Login');
    }

  });


return (
    <div className=' w-screen h-screen flex items-center justify-center font-["gilroy"] bg-black'>
      <h1 className='text-green-500 font-semibold text-xl'>
      <i className="mr-1 ri-verified-badge-fill"></i>
        Logged Out Successfully!
      </h1>
    </div>
  );
}

export default Logout