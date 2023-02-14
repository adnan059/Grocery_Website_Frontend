import React from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import meat from "../../assets/blog-1.jpg";
import vf from "../../assets/blog-2.jpg";
import grocer from "../../assets/blog-3.jpg";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Our <span>blogs</span>
        </h1>

        <div className="boxContainer">
          <div className="box">
            <img src={vf} alt="" />
            <div className="content">
              <div className="icons">
                <a href="#user">
                  <FaUser className="icon" />
                  by user
                </a>
                <a href="#calendar">
                  <FaCalendar className="icon" />
                  25th Apr, 2020
                </a>
              </div>
              <h3>fresh fruits</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptas reprehenderit ullam.
              </p>
              <a href="#readmore" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <img src={meat} alt="" />
            <div className="content">
              <div className="icons">
                <a href="#user">
                  <FaUser className="icon" />
                  by user
                </a>
                <a href="#calendar">
                  <FaCalendar className="icon" />
                  12th Aug, 2021
                </a>
              </div>
              <h3>best quality meat</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptas reprehenderit ullam.
              </p>
              <a href="#readmore" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <img src={grocer} alt="" />
            <div className="content">
              <div className="icons">
                <a href="#user">
                  <FaUser className="icon" />
                  by user
                </a>
                <a href="#calendar">
                  <FaCalendar className="icon" />
                  3rd may, 2022
                </a>
              </div>
              <h3>Necessary grocery items</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptas reprehenderit ullam.
              </p>
              <a href="#readmore" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
