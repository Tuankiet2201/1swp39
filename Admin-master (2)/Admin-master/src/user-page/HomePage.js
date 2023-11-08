import React from "react";
import "../styles/styles.css";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { FacebookFilled } from '@ant-design/icons';
import { Button } from 'antd';
import {
    
    FacebookOutlined,
    GoogleCircleFilled,
    InstagramOutlined,
    GithubOutlined,
    MailFilled,
    
  } from '@ant-design/icons';
import Logout from "../components/Logout";


function homePage() {
    return (
        <body>
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
            <section id="body">
                <h4>Welcome with us</h4>
                <h2>The best website with best services</h2>
                <h1>Everything you need</h1>
                <p>High-Quality Laundry Service Delivered to Your Doorstep</p>
                <button><a href="./store">Let's Order</a></button>
            </section>

            <section id="feature" class="section-p1">

                <div class="fe-box">
                    <img src={require('../assets/img/f1.png')} alt="" />
                    <h6>Fast delivery</h6>
                </div>

                <div class="fe-box">
                    <img src={require('../assets/img/f2.png')} alt="" />
                    <h6>Online Order</h6>
                </div>

                <div class="fe-box">
                    <img src={require('../assets/img/f3.png')} alt="" />
                    <h6>Saving Money</h6>
                </div>

                <div class="fe-box">
                    <img src={require('../assets/img/f4.png')} alt="" />
                    <h6>Promotions</h6>
                </div>

                <div class="fe-box">
                    <img src={require('../assets/img/f5.png')} alt="" />
                    <h6>Happy Sell</h6>
                </div>

                <div class="fe-box">
                    <img src={require('../assets/img/f6.png')} alt="" />
                    <h6>Support 24/7</h6>
                </div>
            </section>

            <section id="service1" class="section-p1">
                <h2>Service details</h2>
                <p>The best services with the best prices</p>
                <div class="service-container">
                    <div class="pro" >
                        <img src={require('../assets/img/homesv1.jpg')} alt="" />
                        <div class="des">
                            <span>Normal</span>
                            <h5>Regular wash</h5>
                            <div className="service-last">
                                <div class="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <a href="./store"><i class="bx fa fa-shopping-cart add-cart"></i></a>
                            </div>
                        </div>

                    </div>

                    <div class="pro">
                        <img src={require('../assets/img/homesv2.jpg')} alt="" />
                        <div class="des">
                            <span>Normal</span>
                            <h5>Quick wash</h5>
                            <div className="service-last">
                                <div class="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <a href="./store"><i class="bx fa fa-shopping-cart add-cart"></i></a>
                            </div>
                        </div>

                    </div>

                    <div class="pro">
                        <img src={require('../assets/img/homesv3.jpg')} alt="" />
                        <div class="des">
                            <span>Normal</span>
                            <h5>Express wash</h5>
                            <div className="service-last">
                                <div class="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <a href="./store"><i class="bx fa fa-shopping-cart add-cart"></i></a>
                            </div>
                        </div>

                    </div>

                    <div class="pro">
                        <img src={require('../assets/img/homesv4.jpg')} alt="" />
                        <div class="des">
                            <span>Normal</span>
                            <h5>Dry wash</h5>
                            <div className="service-last">
                                <div class="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <a href="./store"><i class="bx fa fa-shopping-cart add-cart"></i></a>
                            </div>
                        </div>

                    </div>

                    <div class="pro">
                        <img src={require('../assets/img/homesv5.jpg')} alt="" />
                        <div class="des">
                            <span>Normal</span>
                            <h5>Wash towels</h5>
                            <div className="service-last">
                                <div class="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <a href="./store"><i class="bx fa fa-shopping-cart add-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                        target="_blank" rel="noreferrer">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Disclaimer</a>
                </div>

                <p>&#169; FPT University</p>

            </section>
        </body >




    );
}
export default homePage;