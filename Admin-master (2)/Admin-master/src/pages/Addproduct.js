import React, { useState } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ApiUrl } from "../services/ApiUrl";

const {Title} = Typography;

const Addproduct = () => {
  const [formData, setFormData] = useState({
    productName: "", // You can initialize this with an empty string
    description: "",
    price: 0.0,
    quantity: 0,
    categoryId: 0, // You can initialize this with null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post(
        ApiUrl.addProduct,
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
      <Title level={2}>Add Product</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            placeholder="Enter Product Name :"
            type="text"
            id="productName"
            name="productName"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <Input
            placeholder="Enter product description"
            id="description"
            name="description"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <Input
            type="number"
            id="price"
            name="price"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.price}
            onChange={handleChange}
          />
        </div>{" "}
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <Input
            type="number"
            id="quantity"
            name="quantity"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="categoryId">Category ID:</label>
          <Input
            type="number"
            id="categoryId"
            name="categoryId"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.categoryId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addproduct;