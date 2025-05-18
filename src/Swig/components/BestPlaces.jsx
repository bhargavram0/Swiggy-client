import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cities = [
  "Bangalore", "Pune", "Mumbai", "Delhi",
  "Hyderabad", "Kolkata", "Chennai", "Chandigarh",
  "Ahmedabad", "Jaipur", "Nagpur", "Bhubaneswar",
  "Kochi", "Surat", "Dehradun", "Ludhiana",
  "Patna", "Mangaluru", "Bhopal", "Gurgaon"," Vadodara","Udaipur",
  " Coimbatore","Agra","Noida","Guwahati","Mysore","Pondicherry","Thiruvananthapuram","Ranchi",
  "Vizag"
];
const BestPlaces = () => {
  // const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const handleCityClick = (city) => {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-');
    navigate(`/restaurants/${citySlug}`);
  };

  const visibleCities = showAll ? cities : cities.slice(0, 10);

  return (
    <div className="best-places-container">
      <h2>Best Places to Eat Across Cities</h2>
      <div className="cities-grid">
        {visibleCities.map((city) => (
          <div
            className="city-card"
            key={city}
            onClick={() => handleCityClick(city)}
          >
            Best Restaurants in {city}
          </div>
        ))}

      <div className="show-more-container">
        <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ▲" : "Show More Cities ▼ "}
        </button>
      </div>
      </div>

      {/* Show more / less toggle */}
      {/* <div className="show-more-container">
        <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ▲" : "Show More Cities ▼"}
        </button>
      </div> */}
    </div>
  );
};

export default BestPlaces;
