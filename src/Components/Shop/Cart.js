import React from 'react';

const Cart = ( { cart } ) => {

    const orderItem = cart.length;
    let totalPrice = 0;
    let totalShipingCost = 0; 
    for(let i = 0; i < orderItem; i++) { 
        let shipingCost = 10;
        let productPrice = cart[i].price;
        if( productPrice < 35 ) {
            shipingCost = 0;
        }
        totalShipingCost += shipingCost;
        totalPrice += productPrice;
    }
    let vat = (totalPrice + totalShipingCost) * 0.05;
    let InTotalPrice = (totalPrice + totalShipingCost + vat).toFixed(2);


    // const orderItem = cart.length;
    // let totalPrice = cart.reduce( (total, product) => {
    //     return total + product.price
    // }, 0 )
    
    // let totalShipingCost = 0;
    // if(totalPrice > 35) {
    //     totalShipingCost = 4.5;
    // }else if(totalPrice > 12) {
    //     totalShipingCost = 7.5;
    // }else if(totalPrice === 0){
    //     totalShipingCost = 0
    // }else {
    //     totalShipingCost = 10
    // }

    // let vat = (totalPrice / 100 ) * 2.5;

    // let InTotalPrice = (vat + totalPrice + totalShipingCost).toFixed(2);

    return (
        <div className='Cart'>
            <h2>Order Summary</h2>
            <p>Item Order : {orderItem}</p>
            <p>Product Price : {totalPrice.toFixed(2)} </p>
            <p>Shiping Cost :  {totalShipingCost}</p>
            <p>Tax + vat :  {vat.toFixed(2)}</p>
            <strong>Total :  {InTotalPrice}</strong>
        </div>
    );
};

export default Cart;