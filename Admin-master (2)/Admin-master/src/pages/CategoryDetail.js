import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';


const { Title } = Typography;

const CategoryDetail = () => {
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

  const currentURL = window.location.href;

  // Split the URL by '/'
  const parts = currentURL.split("/");

  // Extract the product ID from the URL
  const categoryId = parts[parts.length - 1];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.put(
    //     `http://localhost:8080/api/category/${categoryId}`,
    //     formData
    //   );
    //   console.log(response);
    //   if (response.status === 200) {
    //     // Handle success, e.g., show a success message or redirect
    //     console.log("Data sent successfully");
    //   } else {
    //     // Handle error, e.g., show an error message
    //     console.error("Failed to send data");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/category/${categoryId}`)
      .then((response) => {
        const apiData = response.data.data;
        setFormData(apiData);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu từ API:", error);
      });
  }, []);

  return (
    <div>
        <Title level={2}>Category Detail</Title>
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
            readOnly
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
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default CategoryDetail;
