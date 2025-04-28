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
      setLoading(true);
      try {
        let apiURL = token
          ? `${import.meta.env.VITE_BASE_URL}/user/profile`
          : `${import.meta.env.VITE_BASE_URL}/auth/google`;

        const response = await axios.get(apiURL, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        if (response.data?.success !== false) {
          const data = response.data;
          setUser({
            username: data.user?.username || data?.decodedtoken?.username || 'Guest',
            photo: data.user?.photo || data?.decodedtoken?.photo || 'https://via.placeholder.com/150',
          });
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to fetch user data.');
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.response?.data || error.message);
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
        setErrorMessage("Failed to fetch user data. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
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
