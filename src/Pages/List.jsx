import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        🛍️ Product Catalog
      </h1>

      <div className=" flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="border border-gray-400 rounded-lg p-4 shadow transform hover:scale-105
                       hover:shadow-2xl transition-all duration-300 flex flex-col"
            
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4"
            />

            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {product.title}
            </h3>

            <p className="font-bold text-green-600 mb-4">
              ${product.price}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="mt-auto text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 "
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
