import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../../Context/UserContext';


const Editprofile = () => {

    const Navigate = useNavigate();
    const { user, setUser } = useContext(userDataContext);


    const [profilePhoto, setProfilePhoto] = useState(null);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState("")
    

    useEffect(() => {
      if (user) setUsername(user.username);
    }, [user]);
  

    const handleFileChange = (e) => {
        setProfilePhoto(e.target.files[0]);
      };
    

    const submitHandler = async (e) => {
   
        e.preventDefault();

        const token = localStorage.getItem("token");
        if(!token){
            setMessage("User not Authenticate!")
            return;
        }
        
        //sending data to backend-
        const formData = new FormData();
        formData.append("username", username);
        if (profilePhoto) formData.append("photo", profilePhoto);

        try{

         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/editprofile`, formData, 
            {
               headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
         );           


          //update new user-
          setUser({ ...user, username: response.data.user.username, photo: response.data.user.photo });
          setMessage("Profile updated successfully!");
          Navigate('/Profile')

        }catch(error){
         console.log("Error details:", error);
         setMessage(error.response?.data?.message || "Something went wrong!");
        }

    };

    return (
        <div className='w-screen h-screen bg-black font-["gilroy"]'>
           
            <div className='flex items-center h-[10%] w-[100%] mb-12'>
            
              <h1 className='text-xl font-normal text-white'>
               <i onClick={() => Navigate(-1)} 
                className="hover:text-[#FEB8E7] hover:scale-x-90 cursor-pointer font-semibold ri-arrow-left-s-line"></i>
                 Edit profile
              </h1>
              
            </div>
            
            <form 
              onSubmit={submitHandler} 
              className='edit relative flex items-center gap-14 justify-center flex-col h-[55%] w-[100%] p-2'>
                <label htmlFor='photoinput'>
                <i className="absolute top-[14%] left-[56%] px-2 py-1 font-normal bg-blue-300 rounded-full text-md cursor-pointer hover:border-[2px] hover:border-black hover:scale-105 duration-100 ri-pencil-line"></i>
                </label>


                <div className='flex flex-col'>

                <img 
                   src={user?.photo ? `${import.meta.env.VITE_BASE_URL}${user.photo}` : '/default-photo-url.jpg'}
                   alt=""
                   style={{ width: '120px', height: '120px', borderRadius: '50%' }}
                   className='rounded-full p-1 object-cover border-white border-[1px]'
                />

                <input 
                  hidden
                  type="file"
                  onChange={handleFileChange} 
                  id='photoinput'
                  accept='image/*'
                />
                </div>
                


                <div>
                <h1 className='text-md text-white font-medium mb-1'>Enter New Username</h1>
                <input 
                 type="text"
                 placeholder='Your username'
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 className='focus:outline-none hover:border-pink-700 px-5 py-2 mb-2 text-pink-400 font-medium rounded-sm bg-[#130F10] border-[2px] border-white placeholder-pink-400 placeholder:text-md'
                 />
                <button type='submit' className="w-[270px] flex justify-center py-2 rounded-md shadow-sm text-md font-semibold text-white bg-gradient-to-r from-[#1289F4] via-[#5042A7] to-[#CF0C72] hover:text-black hover:scale-105 duration-200">
                 Update Profile
                </button>
                </div>
                
            </form>


       
        </div>
    );
};

export default Editprofile