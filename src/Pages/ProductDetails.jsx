import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleBack = () => {
    if (location.state?.from === "home") {
      navigate("/");
    } else if (location.state?.from === "products") {
      navigate("/products");
    } else {
      navigate(-1);
    }
  };

  if (!product) return <h2 className="text-center mt-20">Loading...</h2>;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-2 border border-gray-400 rounded-lg shadow-lg transform hover:scale-99 hover:shadow-2xl transition-all duration-300 flex-col">
      <img
        src={product.image}
        className="h-50 rounded mx-4 mt-2  mb-6"
        alt={product.title}
      />

      <h2 className="text-2xl font-bold mb-2  mt-2">{product.title}</h2>
      <p className="mb-4 text-gray-700 justify-center items-center  ">{product.description}</p>

      <h3 className="text-xl font-bold text-green-600 mb-4">
        ${product.price}
      </h3>

      <div className="flex gap-4">
        <button
          onClick={() => {
            addToCart(product);
            alert("Item Added to Cart");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
         Add to Cart
        </button>

        <button
          onClick={handleBack}
          className="border border-gray-400 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
