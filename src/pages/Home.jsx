import React from "react";
import Category from "../components/category/Category";
import Nav from "../components/nav-bar/Nav";
import Products from "../components/product-list/Products";

export default function Home() {
  return (
    <>
      <Nav />
      <Category />
      <Products />
    </>
  );
}
