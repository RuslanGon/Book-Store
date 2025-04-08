import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/logout");
        console.log(response.data); 
        navigate("/login"); 
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };
    
    logout();
  }, [navigate]);
};

export default LogOut;
