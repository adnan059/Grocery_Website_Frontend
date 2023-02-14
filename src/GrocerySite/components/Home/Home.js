import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            The <span>reliable</span> grocery delivery service
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            aliquam quos reiciendis. Lorem, ipsum dolor.
          </p>
          <a href="#shopnow" className="btn">
            shop now
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
