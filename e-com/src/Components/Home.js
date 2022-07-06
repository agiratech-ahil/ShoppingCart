import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import "./style.css";

export default function Home() {
  const {
    state: { products },
  } = CartState();

  console.log(products);
  return (
    <div className="productContainer">
      {products.map((product) => {
        return <SingleProduct product={product} key={product.id} />;
      })}
    </div>
  );
}
