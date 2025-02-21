// src/components/Restaurants.jsx
import React from "react";
import "../app.css";

const Restaurants = () => {
  return (
    <div className="restaurants-page">
      <h2 className="section-title">Restaurants Near You</h2>
      <div className="restaurant-list">
        {/* Example Restaurant Card */}
        <div className="restaurant-card">
          <img src="fh.jpg" alt="Restaurant" className="restaurant-image" />
          <div className="restaurant-details">
            <h3>The Food Hub</h3>
            <p>Cuisine: Indian, Chinese</p>
            <p>Rating: 4.5 ⭐</p>
            <button className="button-primary">View Menu</button>
          </div>
        </div>
        {/* Add more restaurant cards as needed */}
      </div>
    </div>
  );
};

export default Restaurants;
