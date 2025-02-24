import React from "react";
import FeatureCard from "./cards/FeatureCard";
import { featureList } from "../datas/featureData";
import { Link, useNavigate } from "react-router-dom";

const Features: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-20">
      <h2 className="text-3xl font-bold text-center">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-8">
        {featureList.slice(0, 3).map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            details={feature.details}
          />
        ))}
      </div>
      {/* <button 
        onClick={() => navigate("/features")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all self-end mr-6"
      >
        See More
      </button> */}
      <Link
        to="/features"
        className="mt-6 text-blue-600 underline hover:text-blue-700 transition-all self-end mr-6"
      >
        See More
      </Link>
    </section>
  );
};

export default Features;
