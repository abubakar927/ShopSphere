import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  //SAFE localStorage read
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (!savedCart) return [];

      const parsed = JSON.parse(savedCart);

      // verify that old quantity exists
      return parsed.map(item => ({
        ...item,
        quantity: item.quantity ?? 1,
      }));
    } catch (error) {
      console.error("Cart localStorage error:", error);
      return [];
    }
  });

  // Saves cart on every change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // remove from cart
  const removeFromCart = (id) => {
    setCart(prevCart =>
      prevCart
      .map(item => item.id === id ? { ...item, quantity: item.quantity -1}
        :item
      )
      .filter(item => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
