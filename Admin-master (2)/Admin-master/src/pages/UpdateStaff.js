import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ApiUrl } from "../services/ApiUrl";

const {Title} = Typography;

const UpdateStaff = () => {
  const [formData, setFormData] = useState({
    userId: 0,
    storeId: 0
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
  const staffId = parts[parts.length - 1];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${ApiUrl.updateStaff}/${staffId}`,
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
      .get(`http://localhost:8080/api/staff/${staffId}`)
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
      <Title level={2}>Update Staff</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User Id:</label>
          <Input
            placeholder="Enter Store Name :"
            type="text"
            id="userId"
            name="userId"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="storeId">Store Id:</label>
          <Input
            placeholder="Enter your store location "
            id="storeId"
            name="storeId"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.storeId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateStaff;
