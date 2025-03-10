import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        let response;
        
        if (token) {  
          //Normal Login
          response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          });
        } else {  
          //Google Login
          response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/get-user`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            withCredentials: true
          });
        }

        //Successfully received user data
        if (response && response.data) {
          const data = response.data;
          console.log("usercontext API Response Data:", response.data);
          console.log("usercontext Userdata:", response.data.user);
          console.log("usercontext Decoded Token:", response.data.decodedtoken);


          if (data.success !== false) {
            setUser({
              username: data.user?.username || data?.decodedtoken?.username || 'Guest',
              photo: data.user?.photo || data?.decodedtoken?.photo || 'https://via.placeholder.com/150',
            });            
            setErrorMessage('');
          } else {
            console.warn("usercontext Failed to fetch user:", data.message);
            setErrorMessage(data.message || 'usercontext Failed to fetch user data.');
          }
        } else {
          console.warn("usercontext No data received.");
          setErrorMessage('usercontext No user data received.');
        }
      } catch (error) {
        console.error("usercontext Error fetching user profile:", error.response?.data || error.message);
        localStorage.removeItem('token');  //Token hatao agar error aaye
        setUser(null);
        setErrorMessage("usercontext Failed to fetch user data. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    if (token || document.cookie.includes('token')) {  //Sirf tabhi call karo jab token ya cookie ho
      fetchUserProfile();
    } else {
      setLoading(false);
    }

  }, [token]);

  return (
    <userDataContext.Provider value={{ user, setUser, errorMessage, loading, token, setToken }}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
