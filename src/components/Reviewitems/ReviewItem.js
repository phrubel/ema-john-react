import React from 'react';
import  "./ReviewItem.css";
// import fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = (props) => {
    const {name,quantity}=props.product
    return (
        <div className="review-item">
            <h4 className="product-title">{name}</h4>
            <p>{quantity}</p>
            <br/>
            <button className="cart-btn"><FontAwesomeIcon icon={faMinusCircle} /> Remove</button>
        </div>
    );
};

export default ReviewItem;