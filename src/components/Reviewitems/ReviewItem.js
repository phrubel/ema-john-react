import React from 'react';
import  "./ReviewItem.css";
// import fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product
    return (
        <div className="review-item">
            <h4 className="product-title">{name}</h4>
            <h5>You Added Products: {quantity}</h5>
            <p>Price: ${price}</p>
            <br/>
            <button className="cart-btn" 
                onClick={()=>props.removeProduct(key)}
            >
                <FontAwesomeIcon icon={faMinusCircle} /> Remove</button>
        </div>
    );
};

export default ReviewItem;