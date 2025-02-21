import React from "react";
import "../app.css"; // Ensure this is correctly imported

const menuItems = [
  { id: 1, name: "Margherita Pizza", price: "₹299", image: "pzjpg.jpg" },
  { id: 2, name: "Cheese Burger", price: "₹199", image: "bg.jpg" },
  { id: 3, name: "Pasta Alfredo", price: "₹249", image: "ps.jpg" },
  { id: 4, name: "Paneer Butter Masala", price: "₹349", image: "pn.webp" },
  { id: 5, name: "Sushi Platter", price: "₹599", image: "ss.jpg" },
  { id: 6, name: "Chocolate Cake", price: "₹149", image: "cc.jpg" },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
