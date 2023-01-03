import React from "react";
import Footer from "../components/Footer";
import Category from "../components/Menu/Category";
import ListProduct from "../components/Menu/ListProduct";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mx-auto max-w-[1110px] py-6 px-10">
        <div className="flex-auto w-32">
          <Category />
        </div>
        <div className="flex-auto w-64">
          <ListProduct />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
