import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const url =
            "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        // step-1: Get ID
        for (const id in storedCart) {
            // Step-2: Get product by using ID
            const addedProduct = products.find((product) => product.id === id);
            // Step-3: Get Quantity of teh product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // Step-4: Add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // Step-5: Set the cart
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product) => (
                    <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;
