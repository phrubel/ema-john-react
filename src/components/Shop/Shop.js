
import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
// Products Component import
import Product from "../Product/Product";
import Order from "../Order/Order";



const Shop = () => {
    // for show 10 data in first page
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart,setCart]=useState([]);


    const handleAddProduct=(product)=>{
        console.log("click this",product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
  
  
  return (
    <div className="shop-container">
      <div className="products-container">
          {
          products.map(product => <Product product={product} 
            handleAddProduct={handleAddProduct}
            ></Product>)
          }
      </div>
      <div className="cart-container">
          <Order cart={cart}></Order>
      </div>
    </div>
  );
};

export default Shop;
