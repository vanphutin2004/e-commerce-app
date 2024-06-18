import React, { createContext, useContext, useState } from "react";

// Tạo Context
const ProductsContext = createContext();

// Tạo Provider
function ProductsProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [newCart, setNewCart] = useState([]);

  function addToCart(newCart) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setNewCart((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newCart.id);
      console.log("isExisted", isExisted);
      if (isExisted) {
        console.log("cartItems1", newCart);

        return [...prevItems];
      } else {
        console.log("cartItems2", newCart);

        return [...prevItems, newCart];
      }
    });
  }

  function deleteCart(CartId) {
    setNewCart((prevItems) => prevItems.filter((item) => item.id !== CartId));
  }
  // console.log("newCart", newCart);
  const value = {
    product,
    newCart,
    setProduct,
    setNewCart,
    addToCart,
    deleteCart,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

// Custom Hook để sử dụng context
function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
}

export { ProductsProvider, useProductsContext };
