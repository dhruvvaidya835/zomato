import React from "react";
import "../app.css";

function Orders() {
  return (
    <div className="orders-page">
      <h2 className="section-title">Your Orders</h2>
      <div className="order-items">
        {/* Example Order Item */}
        <div className="order-item">
          <img src="bg.jpg" alt="Food" className="order-item-image" />
          <div className="order-item-details">
            <h3>Cheese Burger</h3>
            <p>Status: Delivered</p>
            <p>Price: ₹150</p>
            <p>Date: 18 Feb 2025</p>
          </div>
          <button className="button-primary">Order Again</button>
        </div>
        <div className="order-item">
          <img src="ps.jpg" alt="Pasta" className="order-item-image" style={{ width: "220px", height: "120px", objectFit: "cover" }}  />
          <div className="order-item-details">
            <h3>Creamy Pasta</h3>
            <p>Status: On the Way</p>
            <p>Price: ₹250</p>
            <p>Date: 19 Feb 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
