import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userDataContext } from '../Context/UserContext';
import axios from 'axios';

const Profile = () => {
  const Navigate = useNavigate();
  const { user } = useContext(userDataContext);

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const getUser = async () => {
      try {
        const userresponse = await axios.get(
          'https://webflix-app-pr72.onrender.com/api/auth/get-user',
          {
            withCredentials: true,  // Include cookies for authentication
          }
        );

        console.log("User Response:", userresponse.data);
        const data = userresponse.data;  // Axios parses JSON

        if (userresponse.status !== 200 || !data.success) {
          alert(data.message || "Failed to fetch user.");
          setLoading(false); 
          return;
        }

        setUserData(data.decodedtoken); 
        setLoading(false); 

      } catch (error) {
        console.error("Error fetching user:", error);
        alert("An error occurred while fetching user data.");
        setLoading(false); 
      }
    };

    getUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='w-screen h-screen bg-black font-["gilroy"]'>
      <div className='flex h-[10%] w-[100%]'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-xl font-normal text-white'>
            <i
              onClick={() => Navigate(-1)}
              className='hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line'
            ></i>
            Profile
          </h1>
        </div>
      </div>

      <div className='bg-black text-white'>
        <h1>User Data</h1>
        <h3>Name: {userData?.username || 'N/A'}</h3>
        <h3>Email: {userData?.email || 'N/A'}</h3>
        <h3>Phone Number: {userData?.phoneNumber || 'N/A'}</h3>
        <img src={userData?.photo || '/default-photo-url.jpg'} alt='User' />
      </div>

      <div className='flex flex-col justify-between h-[90%] w-[100%] p-2 '>
        <Link
          to='/Editprofile'
          className='flex h-[25%] border-[2px] border-black w-[100%] items-center gap-3 bg-[#3F3F3F] rounded-lg duration-150 p-2 hover:scale-105 hover:border-[2px] hover:border-pink-400'
        >
          <img
            className='h-[15vh] w-[15vh] p-1 object-cover rounded-full border-white border-2'
            src={
              user?.photo
                ? `${import.meta.env.VITE_BASE_URL}${user.photo}`
                : '/default-photo-url.jpg'
            }
            alt=''
          />
          <h2 className='text-2xl text-white font-semibold capitalize'>
            {user?.username || 'Loading...'}
          </h2>
        </Link>

        <div className='flex flex-col border-[2px] border-black h-[40%] w-[100%] justify-around gap-5 bg-[#3F3F3F] rounded-lg p-2'>
          <div className='flex justify-between'>
            <h1 className='text-lg flex gap-1 text-white font-normal'>
              <i className='ri-information-2-fill'></i>
              About
            </h1>
            <Link
              to='/Aboutpage'
              className='ri-arrow-right-s-line text-lg cursor-pointer text-white font-semibold hover:scale-150 duration-100'
            ></Link>
          </div>

          <div className='flex justify-between'>
            <h1 className='text-lg flex gap-1 text-white font-normal'>
              <i className='ri-phone-fill'></i>
              Contact
            </h1>
            <Link
              to='/Contactpage'
              className='ri-arrow-right-s-line text-lg cursor-pointer text-white font-semibold hover:scale-150 duration-100'
            ></Link>
          </div>

          <div className='flex justify-between'>
            <h1 className='text-lg flex gap-1 text-white font-normal'>
              <i className='ri-logout-box-r-line'></i>
              Logout
            </h1>
            <Link
              to='/Logout'
              className='ri-arrow-right-s-line text-lg cursor-pointer text-white font-semibold hover:scale-150 duration-100'
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
