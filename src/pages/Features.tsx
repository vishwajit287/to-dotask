import React from "react";
import { featureList } from "../datas/featureData";
import FeatureCard from "../components/cards/FeatureCard";

const Features: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full p-6 pt-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center w-full">Features</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full h-full">
      {featureList.map((feature, index) => (
          <FeatureCard 
            key={index} 
            title={feature.title} 
            description={feature.description} 
            details={feature.details} 
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
