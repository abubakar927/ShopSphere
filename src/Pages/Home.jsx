import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then(res => res.json())
      .then(data => setFeatured(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to ShopSphere
        </h1>
        <p className="text-lg mb-6">
          Quality products. Trusted by thousands. Built for everyone.
        </p>
        <Link
          to="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Explore Products
        </Link>
      </section>

      {/* Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          🏆 Our Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border border-gray-400 rounded-lg shadow">
            <h3 className="text-4xl font-bold text-blue-500">15K+</h3>
            <p className="mt-2">Happy Customers</p>
          </div>

          <div className="p-6 border border-gray-400 rounded-lg shadow">
            <h3 className="text-4xl font-bold text-blue-500">50K+</h3>
            <p className="mt-2">Products Sold</p>
          </div>

          <div className="p-6 border border-gray-400 rounded-lg shadow">
            <h3 className="text-4xl font-bold text-blue-500">4.8★</h3>
            <p className="mt-2">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="mb-16 bg-gray-200 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          🎯 Our Goals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow font-xl">
            Provide high-quality products at affordable prices.
          </div>
          <div className="p-6 bg-white rounded shadow font-xl">
            Create a smooth and secure shopping experience.
          </div>
          <div className="p-6 bg-white rounded shadow font-xl">
            Continuously improve through customer feedback.
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          ⭐ Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(product => (
            <div
              key={product.id}
              className="border border-gray-400 rounded-lg p-4 shadow transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <img
                src={product.image}
                className="h-40 mx-auto object-contain mb-4"
              />
              <h3 className="font-semibold line-clamp-2 mb-2">
                {product.title}
              </h3>
              <p className="font-bold text-green-600 mb-2">
                ${product.price}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="mt-auto block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
