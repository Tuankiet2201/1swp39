/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/services.css";
import {
    
    FacebookOutlined,
    GoogleCircleFilled,
    InstagramOutlined,
    GithubOutlined,
    MailFilled,
    
  } from '@ant-design/icons';

function servicePage() {
    return (
        <body>

            <header>
                <div class="nav container">
                    <a href="home"><img src={require('../assets/img/1.png')} class="logo" alt="" /></a>
                    <li><a href="home">Home</a></li>
                    <li><a href="service">Our Services</a></li>

                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                    <i class='bx fa fa-shopping-cart' id="cart-icon" data-quantity="0"></i>

                    <div class="cart">
                        <h2 class="cart-title">Your cart</h2>

                        <div class="cart-content"></div>
                        <div class="total">
                            <div class="total-title">Total</div>
                            <div class="total-price">$0</div>
                        </div>
                        <button type="button" class="btn-buy">Pay Now</button>
                        <i class='bx bx-x' id="close-cart"></i>
                    </div>

                </div>
            </header>

            <section class="shop container">
                <br/>
                <h2 class="section-title">Shop Service</h2>
                
                <div class="shop-content">
                    <div class="product-box">
                        <img src={require('../assets/img/homesv1.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">REGULAR WASH</h2>
                        
                    </div>
                    <div class="product-box">
                        <img  src={require('../assets/img/homesv2.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">QUICK WASH</h2>
                        
                    </div>
                    <div class="product-box">
                        <img src={require('../assets/img/homesv3.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">EXPRESS WASH</h2>
                        
                    </div>

                    <div class="product-box">
                        <img src={require('../assets/img/homesv4.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">DRY WASH</h2>
                        
                    </div>
                </div>


                <button type="" class="but"><a href="store">Let order</a></button>
                

               


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

            

        </body>
    )
};

export default servicePage;
