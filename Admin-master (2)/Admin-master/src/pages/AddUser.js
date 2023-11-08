import React, { useState } from "react";
import axios from "axios";

import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ApiUrl } from "../services/ApiUrl";


const { Title } = Typography;

const AddUser = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        role: "",
        firstName: "",
        lastName: "",
        password: "",
        createAt: Date.now,
        updatedAt: Date.now,
        lastLogin: Date.now,
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
                ApiUrl.addUser,
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
            <Title level={2}>Add User</Title>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <Input
                        placeholder="Enter username :"
                        type="text"
                        id="username"
                        name="username"
                        size="large"
                        prefix={<UserOutlined />}
                        value={formData.username} //
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <Input
                        placeholder="Enter password:"
                        type="password"
                        id="password"
                        name="password"
                        size="large"
                        prefix={<UserOutlined />}
                        value={formData.password}
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <Input
                        placeholder="Enter last name :"
                        type="text"
                        id="lastName"
                        name="lastName"
                        size="large"
                        prefix={<UserOutlined />}
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;