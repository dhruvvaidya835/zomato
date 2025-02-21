import React from "react";
import "../app.css";

function Cart() {
  return (
    <div className="cart-page">
      <h2 className="section-title">Your Cart</h2>
      <div className="cart-items">
        {/* Example Cart Item */}
        <div className="cart-item">
          <img src="bg.jpg" alt="Food" className="cart-item-image" />
          <div className="cart-item-details">
            <h3>Delicious Burger</h3>
            <p>Quantity: 2</p>
            <p>Price: ₹200</p>
          </div>
          <button className="button-primary">Remove</button>
        </div>
        <div className="cart-item">
          <img src="pzjpg.jpg" alt="Pizza" className="cart-item-image" />
          <div className="cart-item-details">
            <h3>Cheesy Pizza</h3>
            <p>Quantity: 1</p>
            <p>Price: ₹300</p>
          </div>
          <button className="button-primary">Remove</button>
        </div>
        <div className="cart-summary">
          <h3>Total: ₹500</h3>
          <button className="button-primary">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
