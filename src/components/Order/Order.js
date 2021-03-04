import React from "react";
// for Css
import "./Order.css";

// for Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Order = (props) => {
  const cart = props.cart;
  console.log(cart);
  // reduce system
  // const totalPrice=cart.reduce((total,product)=>total+product.price,0);

  // Reduce sara for loop diye same kaj
 //  Total Price
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  //  Shipping Cost
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } 
  else if (total > 15) {
    shipping = 4.99;
  } 
  else if (total > 0) {
    shipping = 12.99;
  }


//   Tax
const tax=(total/10).toFixed(2);

// Grand Total
const grandTotal=(total + shipping+Number(tax)).toFixed(2);

// for formatNumber
// const formatNumber=num=>{
//     const precision=num.toFixed(2);
//     return Number(precision);
// }

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Item order: {cart.length}</p>
      <p>Product Price: {total}</p>
      <p>Shipping Cost: {shipping}</p>
      <p>Tax + Vat: {tax}</p>
      <p>Total Price: {grandTotal}</p>
      <Link to="/review">
        <button className="order-btn">
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </Link>
    </div>
  );
};

export default Order;
