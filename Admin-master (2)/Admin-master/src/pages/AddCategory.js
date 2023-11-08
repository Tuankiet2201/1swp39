import React, { useState } from "react";
import axios from "axios";
import { Typography, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ApiUrl } from "../services/ApiUrl";

const { Title } = Typography;

const AddCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    storeId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const response = await axios.post(
        ApiUrl.addCategory,
        formData
      );
      console.log(response);
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

  return (
    <div>
      <Title level={2}>Add Category</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <Input
            placeholder="Enter Category Name :"
            type="text"
            id="categoryName"
            name="categoryName"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.categoryName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="storeId">Store ID:</label>
          <Input
            type="number"
            id="storeId"
            name="storeId"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.storeId}
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleSubmit} type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCategory;
