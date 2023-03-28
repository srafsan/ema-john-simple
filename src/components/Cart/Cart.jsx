import React from "react";

import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;

    let totalPrice = 0,
        totalShipping = 0;
    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }

    const tax = totalPrice * 0.07,
        grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
