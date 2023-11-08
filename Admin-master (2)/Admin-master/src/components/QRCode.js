import React, { useState } from 'react';
import Logout from "./Logout";
import { Radio, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import {
    
    FacebookOutlined,
    GoogleCircleFilled,
    InstagramOutlined,
    GithubOutlined,
    MailFilled,
    
  } from '@ant-design/icons';

function QRCode() {
    const navigate = useNavigate();

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    }
    const handleSubmit = () => {
        message.success('Data sent successfully');
        navigate("/home");
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
                <h2 class="heading">Payment</h2>
                <div class="about-text">
                    <p>Greetings everyone! <span class="color">F Laundry</span>, as a team from <span
                        class="color">SWP391</span> in class <span class="color">JS1701</span>,
                        want to acknowledge that we're tackling a project we find quite
                        challenging for the first time. Various unexpected obstacles have
                        arisen along the way, making it even more demanding. We sincerely
                        hope you'll be open-hearted and receptive to our project. We appreciate each
                        and every one of you!
                    </p>
                </div>
            </section>
            <div style={{ width: "100%", display:"flex",margin:"5%", justifyContent:"center" }}>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>
                        <img style={{ width: "50%"}} src="https://img.vietqr.io/image/BIDV-75010000538711-compact.png"></img>
                    </Radio>
                    <Radio value={2}>
                    <h3> Thanh toán trực tiếp</h3>
                    </Radio>
                </Radio.Group>
            </div>

            <div style={{display:"flex", justifyContent:"center", margin:"5%"}}>
            <Button onClick={handleSubmit} type='primary'>Submit</Button>
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
                        target="_blank" rel="noreferrer">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Disclaimer</a>
                </div>

                <p>&#169; FPT University</p>
            </section>


        </div>
    )
}
export default QRCode;