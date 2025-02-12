import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userDataContext = createContext();

const UserContext = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    //Fetch User Data from Backend API
  const fetchUserProfile = async () => {

    if (!token) {
      setErrorMessage("⚠ Token unavailable. Please login or signup.");
      return;
    }


    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUser(response.data);
      setErrorMessage('');

    } catch (error) {
      console.error("Token unavailable login or signup:", error);
      localStorage.removeItem('token'); //Remove Invalid token
      setUser(null);
  };

  }
  fetchUserProfile();
  }, [token])
  



  return (
    <userDataContext.Provider value={{ user, setUser, errorMessage }}>
      {children}
    </userDataContext.Provider>
  );

  };

export default UserContext;
