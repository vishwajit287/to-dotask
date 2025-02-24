import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  details: string[];
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, details }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc pl-5 text-gray-700">
        {details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;