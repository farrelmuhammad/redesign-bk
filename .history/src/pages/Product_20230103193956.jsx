import React from "react";
import Footer from "../components/Footer";
import Category from "../components/Menu/Category";
import ListProduct from "../components/Menu/ListProduct";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-auto w-32">
          <Category />
        </div>
        <div className="flex-auto w-64">
          <ListProduct />
        </div>
      </div>
      <div>Product</div>
      <Footer />
    </>
  );
};

export default Product;
