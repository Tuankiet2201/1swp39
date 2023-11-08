import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const {Title} = Typography;

const StoreDetail = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    location: "",
    ownerId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const currentURL = window.location.href;

  // Split the URL by '/'
  const parts = currentURL.split("/");

  // Extract the product ID from the URL
  const storeId = parts[parts.length - 1];


  const fetchData = () => {
    axios
      .get(`http://localhost:8080/api/store/${storeId}`)
      .then((response) => {
        const apiData = response.data.data;
        console.log(apiData);
        setFormData(apiData);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu từ API:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Title level={2}>Store Detail</Title>
      <form>
        <div>
          <label htmlFor="storeName">Store Name:</label>
          <Input
            placeholder="Enter Store Name :"
            type="text"
            id="storeName"
            name="storeName"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.storeName}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <Input
            placeholder="Enter your store location "
            id="location"
            name="location"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.location}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="ownerId">Owner ID:</label>
          <Input
            type="number"
            id="ownerId"
            name="ownerId"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.ownerId}
            onChange={handleChange}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default StoreDetail;
