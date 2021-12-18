import React, { useState } from 'react';
import './Shop.css'
import products from '../../fakeData/products.json';
import Product from './Product';
import './Shop.css';
import Cart from './Cart';

const Shop = () => {
    const product10 = products.slice(0, 10);
    const [product, setProduct] = useState(product10);
    const [cart, setCart] = useState([])

    const addToCart = pd => {
        const newCart = [...cart, pd];
        setCart(newCart)
    }
    return (
        <div className="Shop_container">
            <div className="product_content">
                {
                    product.map( product => 
                        <Product 
                            key={product.key} 
                            item={product}
                            addToCart={ () => addToCart(product)} 
                        />
                    )
                }
            </div>
            <div className="cart_section">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;