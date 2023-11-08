import React, { useState, useEffect } from "react";
import axios from "axios";

import { Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ApiUrl } from "../services/ApiUrl";
import "../styles/checkout.css"

const { Title } = Typography;

const UpdateUser = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        role: "",
        firstName: "",
        lastName: "",
        password: "",
        createAt: Date,
        updatedAt: Date.now,
        lastLogin: Date,
    });

    const currentURL = window.location.href;

    // Split the URL by '/'
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            console.log(formData);
            const response = await axios.put(
                `${ApiUrl.updateUser}/${userId}`,
                formData
            );
            console.log(formData);

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
            <Title level={2}>Update User</Title>
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
                        value={formData.username}
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
                <button className="btn-submit" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateUser;