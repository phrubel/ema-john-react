import React from "react";
// for CSS
import "./Product.css";
// for fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const Product = (props) => {
    // console.log(props);
  // destructuring. props bar bar na likhar jnno
  const { img, name, seller, price, stock,key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-title"><Link to={"/product/"+key}>{name}</Link></h3>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <br />
        <h4>${price}</h4>
        <br />
        <p>Only {stock} left in stock-order soon</p>
        <br />
        {/* Button Show true */}
      {props.showAddToCart && <button className="cart-btn"
          onClick={()=>props.handleAddProduct(props.product)}
      >
        <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
      </div>
    </div>
  );
};

export default Product;
