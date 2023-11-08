import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const {Title} = Typography;

const ProductDetail = () => {
  const [formData, setFormData] = useState({
    productName: "", // You can initialize this with an empty string
    description: "",
    price: 0.0,
    quantity: 0,
    categoryId: 0, // You can initialize this with null
  });


  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/product/${productId}`);
      const formData = response.data.data;
      console.log(formData)
      setFormData(formData)
    }catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
        fetchData();
      }, []);

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
  const productId = parts[parts.length - 1];

  console.log(productId); // This will log "19" to the console

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Title level={2}>Product Detail</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Name:</label>
          <Input
            placeholder="Enter Product Name :"
            type="text"
            id="productName"
            name="productName"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.productName}
            onChange={handleChange}
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default ProductDetail;