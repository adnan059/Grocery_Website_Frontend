import React from "react";
import Navbar from "../GrocerySite/components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";
import Categories from "./components/Categories/Categories";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import "./GS.css";

const GS = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Products />
      <Categories />
      <Reviews />
      <Blogs />
      <Footer />
    </>
  );
};

export default GS;
