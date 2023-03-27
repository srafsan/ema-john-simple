import React, { useEffect, useState } from "react";

import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url =
            "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="shop-container">
            <div className="products-container">
                <h2>Products Coming Soon!!: {products.length}</h2>
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;
