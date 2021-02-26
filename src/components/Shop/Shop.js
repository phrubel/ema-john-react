
import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
// Products Component import
import Product from "../Product/Product";


const Shop = () => {
    // for show 10 data in first page
  const first10 = fakeData.slice(0, 10);
  const [products, setPd] = useState(first10);

    const handleAddProduct=()=>{
        console.log("hoina kan");
    }
  
  
  return (
    <div className="shop-container">
      <div className="products-container">
          {
          products.map(pd => <Product
            handleAddProduct={handleAddProduct}
            product={pd}></Product>)
          }
      </div>
      <div className="cart-container">
          <h3>Kisu Hobe</h3>

      </div>
    </div>
  );
};

export default Shop;
