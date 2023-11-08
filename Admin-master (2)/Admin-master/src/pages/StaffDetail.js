import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const {Title} = Typography;

const StaffDetail = () => {
  const [formData, setFormData] = useState({
    userId: 0,
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
  const staffId = parts[parts.length - 1];


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
      <Title level={2}>Staff Detail</Title>
      <form>
        <div>
          <label htmlFor="userId">User Id:</label>
          <Input
            type="text"
            id="userId"
            name="userId"
            size="large"
            prefix={<UserOutlined />} 
            value={formData.userId}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="storeId">Store Id:</label>
          <Input
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

export default StaffDetail;
