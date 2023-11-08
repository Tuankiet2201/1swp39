import React, { useState,  } from "react";
import axios from "axios";
import { Input } from 'antd';
import { Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ApiUrl } from "../services/ApiUrl";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(ApiUrl.login, formData);
      
      if (response.status === 200) {
        Cookies.set("id", response.data.data.userId);
        Cookies.set("role", response.data.data.role);
        if (response.data.data.role === "User") {
          navigate("/home");
        }
        if (response.data.data.role === "Staff") {
          navigate("admin/order");
        }
        if (response.data.data.role === "Admin") {
          navigate("/admin/");
        }
      } else {
        Cookies.remove('id');
        Cookies.remove('role');
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
   
  };

  return (
    <div className="login">
      <div className="form-login">
        <div className="form-header">
          <img src={require('../assets/img/1.png')} class="logo" alt="" />
        </div>

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
            <p>Don't have an account yet?  <a href="register">Register here</a></p>
          </div>
          <button onClick={handleSubmit()} className="btn-login" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;