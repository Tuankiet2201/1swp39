import React from "react";
import "../styles/about.css"
import Logout from "../components/Logout";
import {
    
    FacebookOutlined,
    GoogleCircleFilled,
    InstagramOutlined,
    GithubOutlined,
    
    
  } from '@ant-design/icons';

function aboutPage() {
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

            <section class="home container" id="home">
                <div class="home-content">
                    <div class="home-img">
                        <img src={require('../assets/img/2.png')} alt="" />
                    </div>
                    <div class="home-text">
                        <h3>Hello</h3>
                        <h2>It's <span class="color">F Laundry</span></h2>

                        <p>
                            We are student of <span class="color">FPT University</span> and this is Mini Capstone of our major
                            <span class="color">SWP391</span>
                            <br />Hope you like it <span class="color">@@</span>
                        </p>

                        <div class="social">
                    
                            <a href="https://www.youtube.com/watch?v=a0qC7lG3Vfc" target="_blank" rel="noreferrer"><GoogleCircleFilled className="bx" /></a>
                            <a href="https://www.instagram.com/_5thjuly_/" target="_blank" rel="noreferrer"><InstagramOutlined className="bx" /></a>
                            <a href="https://www.facebook.com/nam0507.orc" target="_blank" rel="noreferrer"><FacebookOutlined className="bx" /></a>
                            <a href="https://github.com/5thJuly" target="_blank" rel="noreferrer"><GithubOutlined className="bx"/></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about container" id="about">
                <h2 class="heading">About Us</h2>

                <div class="about-text">
                    <p>
                    <span class="color">F Laundry </span>
                    is an innovative Middle Laundry platform designed to simplify your
                    laundry needs.
                    <br />
                    It's not just another laundry service; it's a comprehensive solution that bridges
                    <br />
                    the gap between traditional laundry and modern convenience. Our platform is the result of
                    meticulous planning
                    <br />
                    and development, and it serves as the mini capstone project for the
                    <span class="color"> SWP391</span>
                    </p>
                    
                </div>
            </section>

            <section class="services container" id="services">
                <h2 class="heading">Services</h2>

                <div class="services-content">
                    <div class="services-box">
                        <i class='bx fa fa-home'></i>
                        <h2>Easy To Contact</h2>
                        <p>Contact us and we'll keep in touch with
                            you in whichever way fits your needs.
                            We can be reached via our Hotline,
                            Gmail, Facebook or Instagram. We have both
                            Vietnamese and English speaking staff
                            to assist you.</p>
                    </div>


                    <div class="services-box">
                        <i class='bx fa fa-truck'></i>
                        <h2>Fast implementation time</h2>
                        <p>We understand that time is of the essence,
                            which is why we provide quick and efficient laundry
                            and dry cleaning services. With our quick processing times,
                            you can wash and prepare your clothes as needed</p>
                    </div>

                    <div class="services-box">
                        <i class='bx fa fa-leaf'></i>
                        <h2>Convenience</h2>
                        <p>F Laundry offers a user-friendly interface that allows
                            you to conveniently schedule laundry pickup and
                            delivery. No more waiting in line or rushing to the
                            laundromat</p>
                    </div>


                    <div class="services-box">
                        <i class='bx fa fa-certificate'></i>
                        <h2>Affordable Pricing</h2>
                        <p>We beilieve in giving our cilents the best value for
                            their money. Pricing is straignforward and reflects our
                            dedication to poviding affordable pricing while also not compromising
                            on service or quality cleaning products
                        </p>
                    </div>

                    <div class="services-box">
                        <i class='bx fa fa-certificate'></i>
                        <h2>Convenient Pickup and Delivery</h2>
                        <p>We offer hassle-free pickup and delivery services.
                            Simply schedule a pickup, and we'll handle the rest.
                            It's laundry made easy! It's Laundry time!!
                        </p>
                    </div>



                    <div class="services-box">
                        <i class='bx fa fa-certificate'></i>
                        <h2>Reliable & Hassle-Free Service</h2>
                        <p>Fustrated with your current cleaner who does
                            not deliver on time or provides poor communication
                            and service ? We was create to solve your laundry
                            and dry cleaning problems with exceptional service!
                        </p>
                    </div>
                </div>


            </section>


            
        </body>

    )
};
export default aboutPage;