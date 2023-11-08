import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ApiUrl } from "../services/ApiUrl";

const {Title} = Typography;

const UpdateStore = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${ApiUrl.updateStore}/${storeId}`,
        formData
      );
      if (response.status === 200) {
        // Handle success, e.g., show a success message or redirect
        console.log("Data sent successfully");
      } else {
        // Handle error, e.g., show an error message
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      <Title level={2}>Update Store</Title>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateStore;
