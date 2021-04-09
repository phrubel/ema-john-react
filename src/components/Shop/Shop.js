
import React, { useEffect, useState } from "react";
import "./Shop.css";
// for Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

// Products Component import
import Product from "../Product/Product";
import Order from "../Order/Order";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";



const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    fetch('https://lit-harbor-25416.herokuapp.com/products?search=' + search)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [search])

  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart);
    fetch('https://lit-harbor-25416.herokuapp.com/productsByKeys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productKeys)
    })
      .then(res => res.json())
      .then(data => setCart(data))
  }, [])

  // search handle
  const handleSearch = event => {
    setSearch(event.target.value)
  }


  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProducts = cart.find(pd => pd.key === product.key)
    let count = 1;
    let newCart;
    if (sameProducts) {
      const count = sameProducts.quantity + 1
      sameProducts.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAddedKey)
      newCart = [...others, sameProducts];
    }
    else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    // Import session & Local Storage Function
    addToDatabaseCart(product.key, count)
  }


  return (
    <div className="row">
      <div className="col-md-9">
        <div className="shop-container">
          <div className="products-container">
            <input className="input" onBlur={handleSearch} type="text" placeholder={"Serach Your Choise"} />
            {
              products.map(product => <Product
                // Button show
                showAddToCart={true}
                product={product} key={product.key}
                handleAddProduct={handleAddProduct}
              ></Product>)
            }
          </div>
        </div>
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
