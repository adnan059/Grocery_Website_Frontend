/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { shopppingCartData } from "../../data/data";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Navbar.css";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [navTitle, setNavTitle] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLF, setShowLF] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const checkSS = () => {
    if (window.innerWidth > 991) {
      setIsSmallScreen(false);
      setNavTitle(false);
      setShowNav(false);
    } else if (window.innerWidth > 650 && window.innerWidth < 991) {
      setIsSmallScreen(true);
      setNavTitle(true);
    } else if (window.innerWidth < 650) {
      setIsSmallScreen(true);
      setNavTitle(false);
    }
  };

  useEffect(() => {
    checkSS();
    window.addEventListener("resize", checkSS);
    return () => window.removeEventListener("resize", checkSS);
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setShowCart(false);
      setShowNav(false);
      setShowSearch(false);
      setShowLF(false);
    };
  }, []);

  return (
    <>
      <header className="header">
        <a href="#header" className="logo">
          <img src={logo} alt="" />
        </a>

        {navTitle && <h2 className="navtitle">Grocerteria</h2>}

        <nav
          className={
            isSmallScreen && showNav ? "navbar active showNav" : "navbar"
          }
        >
          {isSmallScreen && (
            <FaTimes className="times" onClick={() => setShowNav(!showNav)} />
          )}
          <div className="navbox">
            <a href="#home">home</a>
            <a href="#features">features</a>
            <a href="#products">products</a>
            <a href="#categories">categories</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </div>
        </nav>

        <div className="icons">
          {isSmallScreen && (
            <FaBars
              className="icon"
              onClick={() => {
                setShowNav(!showNav);
                setShowLF(false);
                setShowCart(false);
                setShowSearch(false);
              }}
            />
          )}
          <FaSearch
            onClick={() => {
              setShowSearch(!showSearch);
              setShowCart(false);
              setShowLF(false);
              setShowNav(false);
            }}
            className="icon"
          />
          <FaShoppingCart
            onClick={() => {
              setShowCart(!showCart);
              setShowSearch(false);
              setShowLF(false);
              setShowNav(false);
            }}
            className="icon"
          />
          <FaUser
            className="icon"
            onClick={() => {
              setShowLF(!showLF);
              setShowCart(false);
              setShowSearch(false);
              setShowNav(false);
            }}
          />
        </div>

        <form className={showSearch ? "searchForm active" : "searchForm"}>
          <input type="text" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box">
            <FaSearch />
          </label>
        </form>

        <div className={showCart ? "shoppingCart active" : "shoppingCart"}>
          <FaTimes className="times" onClick={() => setShowCart(!showCart)} />
          <div className="boxContainer">
            {shopppingCartData.map((item) => (
              <ShoppingCart {...item} />
            ))}
          </div>
          <div className="total">total : $14.48/-</div>
          <a
            href="#checkout"
            className="btn"
            onClick={() => setShowCart(false)}
          >
            checkout
          </a>
        </div>

        <form className={showLF ? "loginForm active" : "loginForm"}>
          <FaTimes className="times" onClick={() => setShowLF(!showLF)} />
          <h3>login now</h3>
          <input type="email" placeholder="Your email..." className="box" />
          <input
            type="password"
            placeholder="Your password..."
            className="box"
          />
          <p>
            forget your password? <a href="#fp">click here</a>
          </p>
          <p>
            don't have an account? <a href="#ca">create one</a>
          </p>
          <input type="submit" value="Login" className="btn" />
        </form>
      </header>
    </>
  );
};

export default Navbar;
