import React, { useState, useEffect } from "react";
import "../styles/services.css";
import "../styles/checkout.css";
import Cookies from "js-cookie";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { ApiUrl } from "../services/ApiUrl";

function UpdateOrder() {
  const storeid = Cookies.get("store_id");
  const productid = Cookies.get("product_id");
  const userid = Cookies.get("id");

  const [priceConst, setPrice] = useState([]);
  const [productNameConst, setproductName] = useState([]);
  const [storeNameConst, setstoreName] = useState([]);

  const currentURL = window.location.href;

  // Split the URL by '/'
  const parts = currentURL.split("/");

  // Extract the product ID from the URL
  const orderId = parts[parts.length - 1];

  const [formData, setFormData] = useState({
    userId: 0,
    storeId: 0,
    productId: 0,
    staffId: 1,
    price: "",
    productName: "",
    createdAt: null,
    status: "",
    phoneNum: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchOrder = () => {
    // Fetch orders from your API using Axios
    axios
      .get(`${ApiUrl.getOrderById}/${orderId}`)
      .then((response) => {
        const apiData = response.data.data;
        setFormData(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  };

  const fetchStore = () => {
    // Fetch orders from your API using Axios
    axios
      .get(`${ApiUrl.getStorebyId}/${storeid}`)
      .then((response) => {
        const apiData = response.data.data;

        setstoreName(apiData.storeName);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  };

  const fetchProduct = () => {
    // Fetch orders from your API using Axios
    axios
      .get(`${ApiUrl.getProductbyId}/${productid}`)
      .then((response) => {
        const apiData = response.data.data;

        setproductName(apiData.productName);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  };

  useEffect(() => {
    fetchOrder();
    fetchStore();
    fetchProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${ApiUrl.updateOrder}/${orderId}`,
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
<h2>Order details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="status">Status :</label>
          <Input
            placeholder="Edit Status :"
            type="text"
            id="status"
            name="status"
            size="large"
            prefix={<UserOutlined />}
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="userId">Username :</label>
          <Input
            readOnly
            type="text"
            id="userId"
            name="userId"
            size="large"
            prefix={<UserOutlined />}
            value={formData.userId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="storeId">Store ID :</label>
          <Input
            readOnly
            type="text"
            id="storeId"
            name="storeId"
            size="large"
            prefix={<UserOutlined />}
            value={formData.storeId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="productName">Product Name :</label>
          <Input
            readOnly
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
          <label htmlFor="phone">Phone :</label>
          <Input
            readOnly
            type="text"
            id="phone"
            name="phone"
            size="large"
            prefix={<UserOutlined />}
            value={formData.phoneNum}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address :</label>
          <Input
            readOnly
            type="text"
            id="address"
            name="address"
            size="large"
            prefix={<UserOutlined />}
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default UpdateOrder;