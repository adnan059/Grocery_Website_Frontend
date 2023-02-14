import React from "react";

const SingleFeatures = ({ ...feature }) => {
  return (
    <>
      <div className="box">
        <img src={feature.image} alt="" />
        <h3>{feature.title}</h3>
        <p>{feature.desc}</p>
        <a href={`#${feature.link}`} className="btn">
          read more
        </a>
      </div>
    </>
  );
};

export default SingleFeatures;
