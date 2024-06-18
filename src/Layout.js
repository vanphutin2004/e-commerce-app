import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Components/Role/Users/Users";
import Admin from "./Components/Role/Admin/Admin";
import ProductPage from "./Components/Products/Content/ProductPage";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewProducts from "./Components/Products/Content/ViewProducts";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<ViewProducts />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Layout;
