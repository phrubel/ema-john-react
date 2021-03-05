
import React, { useEffect, useState } from "react";
import "./Shop.css";
// for Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
// import fakeData
import fakeData from "../../fakeData";
// Products Component import
import Product from "../Product/Product";
import Order from "../Order/Order";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";



const Shop = () => {
    // for show 10 data in first page
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart,setCart]=useState([]);

  useEffect(() =>{
    const savedCart=getDatabaseCart()
  const productKeys=Object.keys(savedCart);
  const previousCart=productKeys.map(existingKey => {
    const product=fakeData.find(pd => pd.key === existingKey);
    product.quantity=savedCart[existingKey];
    return product;
  })
  setCart(previousCart);
  },[])

    const handleAddProduct=(product)=>{
        // console.log("click this",product);
        const toBeAddedKey=product.key;
        const sameProducts=cart.find(pd=>pd.key===product.key)
       let count=1;
       let newCart;
        if(sameProducts){
         const count=sameProducts.quantity+1
         sameProducts.quantity=count;
         const others= cart.filter(pd =>pd.key !== toBeAddedKey)
         newCart=[...others,sameProducts];
       }
       else{
         product.quantity=1;
         newCart=[...cart,product];
       }

         setCart(newCart);
        // Import session & Local Storage Function
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
          <Order cart={cart}>
          <Link to="/review">
        <button className="order-btn">
          <FontAwesomeIcon icon={faEye} /> Review Order</button>
      </Link>
          </Order>
      </div>
    </div>
  );
};

export default Shop;
