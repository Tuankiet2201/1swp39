import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ApiUrl } from "../services/ApiUrl";

const {Title} = Typography;

const UserDetail = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        role: "",
        firstName: "",
        lastName: "",
        createAt: Date,
        updatedAt: Date.now,
        lastLogin: Date,
  });

  const currentURL = window.location.href;

  const parts = currentURL.split("/");

  // Extract the product ID from the URL
  const userId = parts[parts.length - 1];

  const fetchData = () => {
      // Make the API call using Axios when the component mounts
      axios.get(`${ApiUrl.getUserbyId}/${userId}`).then((response) => {

          // Map the API data to match the table columns
          const apiData = response.data.data;
          setFormData(apiData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    <Title level={2}>Update User</Title>
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <Input
                placeholder="Enter username :"
                type="text"
                id="username"
                name="username"
                size="large"
                prefix={<UserOutlined />}
                value={formData.username}
                readOnly
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <Input
                placeholder="Enter email :"
                type="text"
                id="email"
                name="email"
                size="large"
                prefix={<UserOutlined />}
                value={formData.email}
                readOnly
            />
        </div>
        <div>
            <label htmlFor="role">Role:</label>
            <Input
                placeholder="Enter role :"
                type="text"
                id="role"
                name="role"
                size="large"
                prefix={<UserOutlined />}
                value={formData.role}
                readOnly
            />
        </div>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <Input
                placeholder="Enter first name :"
                type="text"
                id="firstName"
                name="firstName"
                size="large"
                prefix={<UserOutlined />}
                value={formData.firstName}
                readOnly
            />
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <Input
                type="text"
                id="lastName"
                name="lastName"
                size="large"
                prefix={<UserOutlined />}
                value={formData.lastName}
                readOnly
            />
        </div>
        <div>
            <label htmlFor="createAt">Create At:</label>
            <Input
                type="text"
                id="createAt"
                name="createAt"
                size="large"
                prefix={<UserOutlined />}
                value={formData.createAt}
                readOnly
            />
        </div>
         <div>
            <label htmlFor="updatedAt">Update At:</label>
            <Input
                type="text"
                id="updatedAt"
                name="updatedAt"
                size="large"
                prefix={<UserOutlined />}
                value={formData.updatedAt}
                readOnly
            />
        </div>
        <div>
            <label htmlFor="lastLogin">Last Login:</label>
            <Input
                type="text"
                id="lastLogin"
                name="lastLogin"
                size="large"
                prefix={<UserOutlined />}
                value={formData.lastLogin}
                readOnly
            />
        </div>
        
    </form>
</div>
  );
};

export default UserDetail;
