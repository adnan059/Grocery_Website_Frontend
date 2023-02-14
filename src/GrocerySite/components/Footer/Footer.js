import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhone,
  FaReddit,
  FaShoppingBasket,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="boxContainer">
          <div className="box">
            <h3>
              grocerteria <FaShoppingBasket className="h3Icon" />
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="share">
              <a href="#fb">
                <FaFacebook className="scIcon" />
              </a>

              <a href="#tw">
                <FaTwitter className="scIcon" />
              </a>

              <a href="#ins">
                <FaInstagram className="scIcon" />
              </a>

              <a href="#red">
                <FaReddit className="scIcon" />
              </a>
            </div>
          </div>

          <div className="box">
            <h3>Contact info</h3>
            <a href="#phone" className="links">
              <FaPhone className="cqIcon" /> +123456789
            </a>

            <a href="#phone" className="links">
              <FaPhone className="cqIcon" /> +987456321
            </a>

            <a href="#email" className="links">
              <FaEnvelope className="cqIcon" /> abc@xyz.com
            </a>

            <a href="#map" className="links">
              <FaMapMarkedAlt className="cqIcon" /> US, UK, UAE
            </a>
          </div>

          <div className="box">
            <h3>quick links</h3>

            <a href="#home" className="links">
              <FaArrowRight className="cqIcon" /> home
            </a>

            <a href="#features" className="links">
              <FaArrowRight className="cqIcon" /> features
            </a>

            <a href="#products" className="links">
              <FaArrowRight className="cqIcon" /> products
            </a>

            <a href="#categories" className="links">
              <FaArrowRight className="cqIcon" /> categories
            </a>

            <a href="#reviews" className="links">
              <FaArrowRight className="cqIcon" /> reviews
            </a>

            <a href="#blogs" className="links">
              <FaArrowRight className="cqIcon" /> blogs
            </a>
          </div>

          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input
              type="email"
              placeholder="Enter your email..."
              className="email"
            />
            <input type="submit" value="submit" className="btn" />
          </div>
        </div>
        <div className="credit">
          created by{" "}
          <a href="https://www.facebook.com/remianturza">Md Adnan Faruk</a>
        </div>
      </section>
    </>
  );
};

export default Footer;
