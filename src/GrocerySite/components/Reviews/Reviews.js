import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Reviews.css";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
import { reviewsData } from "../../data/data";

const Reviews = () => {
  return (
    <>
      <section className="reviews" id="reviews">
        <h1 className="heading">
          customers' <span>reviews</span>
        </h1>

        <Swiper
          modules={[Autoplay]}
          className="review-slider"
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
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
        >
          {reviewsData.map((client) => (
            <SwiperSlide>
              <div className="box">
                <img src={client.image} alt="" />
                <p>{client.speech}</p>
                <h3>{client.clientName}</h3>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;
