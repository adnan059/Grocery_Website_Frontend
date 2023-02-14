import React from "react";
import fruits from "../../assets/cat-1.png";
import veg from "../../assets/cat-2.png";
import dairy from "../../assets/cat-3.png";
import meat from "../../assets/cat-4.png";
import "./Categories.css";

const Categories = () => {
  return (
    <>
      <section className="categories" id="categories">
        <h1 className="heading">
          product <span>categories</span>
        </h1>

        <div className="boxContainer">
          <div className="box">
            <img src={veg} alt="" />
            <h3>vegetables</h3>
            <p>upto 45% off</p>
            <a href="#veg" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src={fruits} alt="" />
            <h3>fruits</h3>
            <p>upto 30% off</p>
            <a href="#fruits" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src={dairy} alt="" />
            <h3>dairy products</h3>
            <p>upto 10% off</p>
            <a href="#dairy" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src={meat} alt="" />
            <h3>meat</h3>
            <p>upto 5% off</p>
            <a href="#meat" className="btn">
              shop now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
