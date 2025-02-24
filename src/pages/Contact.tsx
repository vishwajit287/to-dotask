import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full p-6 pt-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-violet-300 px-4 py-2 text-black rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
