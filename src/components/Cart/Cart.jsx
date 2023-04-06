import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;

    let totalPrice = 0,
        totalShipping = 0,
        quantity = 0;

    for (const product of cart) {
        product.quantity = product.quantity || 1;

        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = totalPrice * 0.07,
        grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={props.handleClearCart} className="btn-clear-cart">
                <span>Clear Cart</span> <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Cart;
