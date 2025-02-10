import React, { createContext, useState, useEffect } from 'react';
export const userDataContext = createContext();



const UserContext = ({children}) => {
  
  // Check if user data is already in localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(storedUser || {
    username: "",
    email: "",
    age: "",
    password: "",
    photo: "",
  });

  // Effect to store user data in localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // Store user data in localStorage
    } else {
      localStorage.removeItem("user"); // Clear on logout
    }
  }, [user]);

  return (
    <userDataContext.Provider value={{ user, setUser }}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
