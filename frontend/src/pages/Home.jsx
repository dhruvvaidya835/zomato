import React from "react";
import "../app.css"; // Make sure this file is properly linked

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Discover the best food & drinks in your city</h1>
        <div className="search-box">
          <input type="text" placeholder="Search for restaurants, cuisines, or a dish" />
          <button>Search</button>
          {/* <div className="home-page-background">
    <div className="home-content">
        <h1>Welcome to Flash!</h1>
        <p>Order your favorite meals quickly and easily!</p>
    </div>
</div> */}



        </div>
      </div>
    </div>
  );
};

export default Home;
