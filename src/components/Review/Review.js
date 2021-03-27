import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Order from '../Order/Order';
import ReviewItem from '../Reviewitems/ReviewItem';
// Import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
// import image
import thankYouImage from "../../images/giphy.gif";
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)
    const history = useHistory()

    const handleCheckOut = () => {
        history.push('/shipment')
        //  setCart([]);
        //  setOrderPlaced(true)
        //  processOrder()
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }



    useEffect(() => {
        // set Local Storage
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={thankYouImage} alt="" />
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct}
                        key={pd.key}
                    ></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className="cart-container">
                <Order cart={cart}>
                    <button className="order-btn" onClick={handleCheckOut} >
                        <FontAwesomeIcon icon={faClipboardCheck} /> Check Out</button>
                </Order>
            </div>
        </div>
    );
};

export default Review;