import React from "react";
import { featureData } from "../../data/data";
import "./Features.css";
import SingleFeatures from "./SingleFeatures";
const Features = () => {
  return (
    <>
      <section className="features" id="features">
        <h1 className="heading">
          our <span>features</span>
        </h1>

        <div className="boxContainer">
          {featureData.map((feature) => (
            <SingleFeatures {...feature} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
