import "../styles/contact.css";
import Logout from "../components/Logout";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert2";
import {
    
  FacebookOutlined,
  GoogleCircleFilled,
  InstagramOutlined,
  GithubOutlined,
  MailFilled,
  
} from '@ant-design/icons';

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendmail = () => {
    emailjs.init("cT9drwC2qNKxWsOLc");
    console.log(name);
    console.log(email);
    console.log(message);
    emailjs
      .send("service_abbiqhd", "template_almh0sn", {
        to_name: name,
        from_name: email,
        message: message,
      })
      .then(() => {
        success();
      })
      .catch(() => {
        // Handle errors
        swal.fire({
          title: "Email sending failed!",
          text: "Please try again later.",
          icon: "error",
        });
      });
  };

  const emptyerror = () => {
    swal.fire({
      title: "Oh No ...",
      text: "Fields cannot be empty!",
      icon: "error",
    });
  };

  const success = () => {
    swal.fire({
      title: "Email sent successfully!",
      text: "We try to reply in 12 hours!",
      icon: "success",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      emptyerror();
    } else {
      sendmail();
    }
  };

  return (
    <body>
      <section id="header">
        <a href="#">
          <img src={require("../assets/img/1.png")} class="logo" alt="" />
        </a>

        <div>
          <ul id="navbar">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="service">Our Services</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <Logout></Logout>
          </ul>
        </div>
      </section>

      <section class="about container" id="about">
        <h2 class="heading">Confessions</h2>
        <div class="about-text">
          <p>
            Greetings everyone! <span class="color">F Laundry</span>, as a team
            from <span class="color">SWP391</span> in class{" "}
            <span class="color">JS1701</span>, want to acknowledge that we're
            tackling a project we find quite challenging for the first time.
            Various unexpected obstacles have arisen along the way, making it
            even more demanding. We sincerely hope you'll be open-hearted and
            receptive to our project. We appreciate each and every one of you!
          </p>
        </div>
      </section>

      <div class="contact-section">
        <div class="contact-info">
          <div>
            <i class="fa fa-map-marker-alt"></i> Thu Duc, Ho Chi Minh City ,
            VietNam
          </div>
          <div>
            <i class="fa fa-envelope"></i> namdhse173582@fpt.edu.vn
          </div>
          <div>
          <i class="fa fa-phone"></i> +84 48700532
          </div>
          <div>
            <i class="fa fa-clock"></i> Mon - Fri 8:00 - 16:30
          </div>
        </div>

        <div class="contact-form">
          <h2>Contact Us</h2>
          <form
            onSubmit={handleSubmit}
            className="contact"
            action=""
            method="post"
          >
            <input
              type="text"
              className="text-box"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Your gmail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              className="message"
              rows="5"
              placeholder="Your Message....."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input
              type="submit"
              name="submit"
              className="send-btn"
              value="Send"
            />
          </form>
        </div>
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

        
      
    </body>
  );
};

export default ContactPage;