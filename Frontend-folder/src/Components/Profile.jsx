import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { userDataContext } from '../Context/UserContext';


const Profile = () => {

  const Navigate = useNavigate();
  const { user } = useContext(userDataContext);

  const [userData, setUser] = useState(null);


  useEffect(() => {
    const getUser = async () => {
      try {
        const userresponse = await fetch('http://localhost:3000/api/auth/get-user', {
          method: 'GET',
          credentials: 'include',
        });

        const data = await userresponse.json();

        if (!userresponse.ok) {
          alert(data.message)
          return;
        }

        if (data.success) {
          setUser(data.user);
        } else {
          alert(data.message);
        }

      } catch (error) {
        console.log(error);
      }
    }

    getUser();
}, [])


if(!userData || !userData.success) return <div>Loading...</div>

  return (
    <div className='w-screen h-screen bg-black font-["gilroy"]'>
      <div className='flex h-[10%] w-[100%]'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-xl font-normal text-white'>
           <i onClick={() => Navigate(-1)} 
           className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
           Profile
          </h1>
        </div>
      </div>

      <div className='bg-black text-white'>
      <h1>User Data</h1>
      <h3>Name: {userData.name}</h3>
      <h3>Email: {userData.email}</h3>
      <h3>Phone Number: {userData.phoneNumber}</h3>
      <img src={userData.photo} alt="User" />
      </div>

      <div className='flex flex-col justify-between h-[90%] w-[100%] p-2 '>
          <Link 
           to="/Editprofile" 
           className='flex h-[25%] border-[2px] border-black w-[100%] items-center gap-3 bg-[#3F3F3F] rounded-lg duration-150 p-2 hover:scale-105 hover:border-[2px] hover:border-pink-400'>
            <img 
              className='h-[15vh] w-[15vh] p-1 object-cover rounded-full border-white border-2' 
              src={user?.photo ? `${import.meta.env.VITE_BASE_URL}${user.photo}` : '/default-photo-url.jpg'}
              alt="" />
            <h2 className='text-2xl text-white font-semibold capitalize'>{user?.username || "Loading..."}</h2>
          </Link>

          <div className='flex flex-col border-[2px] border-black h-[40%] w-[100%] justify-around gap-5 bg-[#3F3F3F] rounded-lg p-2'>
            
            <div className='flex justify-between'>
  
            <h1 className='text-lg flex gap-1 text-white font-normal'>
            <i className="ri-information-2-fill"></i> 
            About
            </h1>
            <Link to="/Aboutpage" className="ri-arrow-right-s-line text-lg cursor-pointer text-white font-semibold hover:scale-150 duration-100"></Link>
            </div>

            <div className='flex justify-between'>
  
            <h1 className='text-lg flex gap-1 text-white font-normal'>
            <i className="ri-phone-fill"></i> 
            Contact
            </h1>
            <Link to="/Contactpage" className="ri-arrow-right-s-line text-lg cursor-pointer text-white font-semibold hover:scale-150 duration-100"></Link>
            </div>

            <div className='flex justify-between'>
  
            <h1 className='text-lg flex gap-1 text-white font-normal'>
            <i className="ri-logout-box-r-line"></i> 
            Logout
            </h1>
            <Link to="/Logout" className="ri-arrow-right-s-line text-lg cursor-pointer text-white font-semibold hover:scale-150 duration-100"></Link>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Profile