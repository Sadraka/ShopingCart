import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./components/Homepage";
import ProductsFunc from "./components/Products/ProductsFunc";
import ProductDetail from "./components/Products/Productsco/ProductDetail";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductsContexProvider from "./components/Products/ProductsContexProvider";
import CardContextProvider from "./components/Cart/CartContextProvider";
import Cart from "./components/Cart/Cart";
class App extends Component {
  render() {
    return (
      <>
        <ProductsContexProvider>
          <CardContextProvider>
            <Navbar />
            <Routes>
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<ProductsFunc />} />
              <Route exact path="/" element={<Homepage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </CardContextProvider>
        </ProductsContexProvider>
        <Footer />
      </>
    );
  }
}

export default App;
