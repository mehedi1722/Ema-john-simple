import React from 'react';

const Product = ({item, addToCart}) => {
    const {name, category, img, price, seller } = item;
    return (
        <div className='Product_item'>
            <div className="product_image">
                <img src={img} alt="img" />
            </div>
            <div className="product_details">
                <h2>{name}</h2>
                <span>{category}</span>
                <p>By: {seller}</p>
                <h4>{price}$</h4>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;