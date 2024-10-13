import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-600 min-h-screen flex flex-col justify-center items-center text-white p-4">
      {/* Hero Section */}
      <motion.section 
        className="mb-12 text-center p-8 rounded-lg shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to E-Commerce Store</h1>
        <p className="text-lg mb-6">
          Discover amazing products at unbeatable prices! Your satisfaction is our priority.
        </p>
        <Link to="/shop" className="bg-green-400 text-black p-3 rounded-full shadow-lg hover:bg-green-500 transition duration-300 transform hover:scale-105">
          Shop Now
        </Link>
      </motion.section>

      {/* Promotional Section */}
      <motion.section 
        className="mb-12 p-8 rounded-lg shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="mb-4">
          At E-Shop, we offer a wide variety of products that cater to your every need. 
          Our commitment to quality and customer satisfaction sets us apart.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li className="text-lg">🌟 High-quality products</li>
          <li className="text-lg">🤝 Exceptional customer service</li>
          <li className="text-lg">🚀 Fast shipping</li>
          <li className="text-lg">🔄 Easy returns</li>
        </ul>
      </motion.section>

  

      {/* Testimonials Section */}
      <motion.section 
        className="mb-12 p-8 rounded-lg shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
        <div className="space-y-4">
          <blockquote className="italic">"Amazing service and great products!"</blockquote>
          <cite>- Alex S.</cite>
          <blockquote className="italic">"I love shopping here. Highly recommend!"</blockquote>
          <cite>- Jamie L.</cite>
        </div>
      </motion.section>

   
    </div>
  );
};

export default Home;
