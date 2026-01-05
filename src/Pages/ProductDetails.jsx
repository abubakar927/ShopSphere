import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="text-center mt-20">Loading...</h2>;

  return (
    <div className="max-w-lg mx-auto p-6 mt-2 border border-gray-400 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col">
      <img src={product.image} className="h-60 mx-auto object-contain mb-6" />

      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <p className="mb-4 text-gray-700">{product.description}</p>

      <h3 className="text-xl font-bold text-green-600 mb-4">
        ${product.price}
      </h3>

      <div className="flex gap-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>

        <Link
          to="/products"
          className=" border bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
