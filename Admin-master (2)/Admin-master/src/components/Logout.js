import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button } from 'antd';
import { ApiUrl } from '../services/ApiUrl';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();
  const userId = Cookies.get('id');
  const userRole = Cookies.get('role');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data by user ID from your API
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  const fetchUserData = (userId) => {
    axios.get(`${ApiUrl.getUserbyId}/${userId}}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
      });
  };

  const handleLogout = () => {
    Cookies.remove('id');
    Cookies.remove('role');
    Cookies.remove('store_id');
    Cookies.remove('product_id');
    navigate('/login');
  };

  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {/* <p>User ID: {userId}</p> */}
        <Button onClick={handleLogout}>Logout</Button>
    </div>
    
  );
};

export default Logout;
