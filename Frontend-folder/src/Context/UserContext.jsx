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
            withCredentials: true
          });
        }

        //Successfully received user data
        if (response && response.data) {
          const data = response.data;
          console.log("User Response:", data);

          if (data.success !== false) {
            setUser({
              username: data.username || data.decodedtoken?.username,
              photo: data.photo || data.decodedtoken?.photo,
            });
            setErrorMessage('');
          } else {
            console.warn("Failed to fetch user:", data.message);
            setErrorMessage(data.message || 'Failed to fetch user data.');
          }
        } else {
          console.warn("No data received.");
          setErrorMessage('No user data received.');
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.response?.data || error.message);
        localStorage.removeItem('token');  //Token hatao agar error aaye
        setUser(null);
        setErrorMessage("Failed to fetch user data. Please login again.");
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
    <userDataContext.Provider value={{ user, setUser, errorMessage, loading, setToken }}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
