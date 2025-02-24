import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold ${
        variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;