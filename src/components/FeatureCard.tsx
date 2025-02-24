import React from "react";

interface FeatureProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;