import React, { useState, useEffect } from 'react';
import { Card, Space, Button } from 'antd';
import axios from 'axios';
import { Typography } from 'antd';
import Cookies from "js-cookie"
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../styles/store.css";
import Logout from '../components/Logout';
import {
    
  FacebookOutlined,
  GoogleCircleFilled,
  InstagramOutlined,
  GithubOutlined,
  MailFilled,
  
} from '@ant-design/icons';

const { Title } = Typography;
const ProductPage = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/product/all')
      .then((response) => {
        setproducts(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChooseProduct = (productId) => {
    Cookies.set("product_id", productId);
  };

  return (
    <div>
      <section id="header">
        <a href="home"><img src={require('../assets/img/1.png')} class="logo" alt="" /></a>

        <div>
          <ul id="navbar">
            <li><a href="home">Home</a></li>
            <li><a href="store">Our Services</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
            <Logout></Logout>
          </ul>

        </div>
      </section>

      <section class="about container" id="about">
        <h2 class="heading">Choose Product</h2>
        
      </section>

      <div className="space"> {/* Apply the space class */}

        {products.map((product) => (
          <Card
            key={product.productId}
            title={product.productName}
            style={{
              width: 300,
            }}
          >
            <p>Description: {product.description}</p>
            <p>Price: {product.price},000vnd</p>
            
            {/* <p>Category Name: {product.categoryName}</p> */}
            {<Link to="/Checkout" onClick={() => handleChooseProduct(product.productId)}>
              <div className='btn-choose'>
                <Button type="primary">Choose</Button>
              </div>
            </Link>}

          </Card>
        ))}
      </div>
      <section class="footer container" id="footer">
      <div class="social">
                    <a href="mailto:namdhse173582@fpt.edu.vn"><MailFilled className="bx"/></a>
                    <a href="https://www.youtube.com/watch?v=a0qC7lG3Vfc" target="_blank" rel="noreferrer"><GoogleCircleFilled className="bx" /></a>
                    <a href="https://www.instagram.com/_5thjuly_/" target="_blank" rel="noreferrer"><InstagramOutlined className="bx" /></a>
                    <a href="https://www.facebook.com/nam0507.orc" target="_blank" rel="noreferrer"><FacebookOutlined className="bx" /></a>
                    <a href="https://github.com/5thJuly" target="_blank" rel="noreferrer"><GithubOutlined className="bx"/></a>
                </div>
        <div class="footer-links">
          <a href="https://docs.google.com/document/d/17o3KWvLfRAjSnGftBiv7JtIBD9eSEgRGTLFStxhcrsA/edit"
            target="_blank">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Disclaimer</a>
        </div>

        <p>&#169; FPT University</p>

      </section>
    </div>
  );
};

export default ProductPage;
