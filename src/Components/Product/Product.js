import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Product.css'



const Product = ({ handleAddToCart, product }) => {

    // const { handleAddToCart, product } = props

    // const { handleAddToCart } = props
    // const { name, img, seller, price, ratings } = props.product;
    const { name, img, seller, price, ratings } = product;


    return (
        <div className='product'>
            <img src={img} alt="shoe"></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>  Ratings: {ratings} stars</small></p>
            </div>
            {/* <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'> */}
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Product;