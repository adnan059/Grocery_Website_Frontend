import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { productsData } from "../../data/data";
import "./Products.css";

const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
          className="products-slider"
        >
          {productsData.map((product) => (
            <SwiperSlide>
              <div className="box">
                <img src={product.image} alt="" />
                <h3>{product.productName}</h3>
                <div className="price">{product.price}</div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <a href="#addtocart" className="btn">
                  add to cart
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Products;
