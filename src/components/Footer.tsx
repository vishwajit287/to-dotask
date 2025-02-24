import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-6 bg-gray-200">
      <p>&copy; {new Date().getFullYear()} {import.meta.env.VITE_BRAND_NAME}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;