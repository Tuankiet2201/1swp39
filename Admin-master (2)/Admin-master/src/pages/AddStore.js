import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button, Flex } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import axios from "axios";
import { ApiUrl } from "../services/ApiUrl";

const { Title } = Typography;

const AddStore = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        storeName: "",
        location: "",
        ownerId: 0,
        ownerName: "",
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
               ApiUrl.addStore,
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
            <Title level={2}>Add Store</Title>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="storeName">Store Name:</label>
                    <Input
                        placeholder="Enter Store Name :"
                        type="text"
                        id="storeName"
                        name="storeName"
                        size="large"
                        value={formData.storeName}
                        onChange={handleChange}
                        prefix={<UserOutlined />}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <Input
                        placeholder="Enter your store location "
                        id="location"
                        name="location"
                        size="large"
                        value={formData.location}
                        onChange={handleChange}
                        prefix={<UserOutlined />}

                    />
                </div>
                <div>
                    <label htmlFor="ownerId">Owner ID:</label>
                    <Input
                        type="number"
                        id="ownerId"
                        name="ownerId"
                        size="large"
                        placeholder="Enter your Owner Id "
                        value={formData.ownerId}
                        onChange={handleChange}
                        prefix={<UserOutlined />}
                    />
                </div>
                <div>
                    <label htmlFor="ownerName">Owner Name:</label>
                    <Input
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        size="large"
                        placeholder="Enter your Owner Id "
                        value={formData.ownerName}
                        onChange={handleChange}
                        prefix={<UserOutlined />}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddStore;
