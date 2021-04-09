import React, { useEffect, useState } from 'react';
// Import component & use Params
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch('https://lit-harbor-25416.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productKey])

    return (
        <div>
            <h3>Your Products Details:</h3>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;