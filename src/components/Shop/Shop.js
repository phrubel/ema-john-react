
import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
// Products Component import
import Product from "../Product/Product";
import Order from "../Order/Order";
import { addToDatabaseCart } from "../../utilities/databaseManager";



const Shop = () => {
    // for show 10 data in first page
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart,setCart]=useState([]);


    const handleAddProduct=(product)=>{
        console.log("click this",product);
        const newCart=[...cart,product];
        setCart(newCart);
        // Import session & Local Storage Function
        const sameProducts=newCart.filter(pd=>pd.key===product.key)
        const count=sameProducts.length
        addToDatabaseCart(product.key,count)
    }
  
  
  return (
    <div className="shop-container">
      <div className="products-container">
          {
          products.map(product => <Product
          // Button show
            showAddToCart={true}
            product={product} key={product.key}
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
