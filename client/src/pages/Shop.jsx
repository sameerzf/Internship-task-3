import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/shop`); // Adjust this to your actual API endpoint
        // Assuming the response data is an array of products
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products.');
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shop</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <h3 className="font-bold">{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => alert('Proceeding to checkout')}
          className="bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600"
        >
          <Link to={'/checkout'}>Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default Shop;
