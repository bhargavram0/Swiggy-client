import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const cuisines = [
  "Chinese", "South Indian", "Indian", "Kerala", "Korean",
  "North Indian", "Seafood", "Bengali", "Punjabi", "Italian",
  "Andhra", "Biryani", "Japanese", "Arabian", "Fast Food",
  "Jain", "Gujarati", "Thai", "Pizzas", "Asian",
  "Cafe", "Continental", "Mexican", "Mughlai", "Sushi",
  "Mangalorean", "Tibetan", "Barbecue", "Maharashtrian", "Nepalese",
  "Rajasthani", "Turkish"
];

const BestCuisines = () => {
  const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

  const visibleCuisines = showAll ? cuisines : cuisines.slice(0, 10);

  const handleClick = (cuisine) => {
    const slug = cuisine.toLowerCase().replace(/\s+/g, '-');
    navigate(`/cuisines/${slug}`);
  };

  return (
    <div className="best-cuisines-container">
      <h2>Best Cuisines Near Me</h2>
      <div className="cuisines-grid">
        {visibleCuisines.map((cuisine) => (
          <div className="cuisine-card" key={cuisine} onClick={() => handleClick(cuisine)}>
            {cuisine} Restaurant Near Me
          </div>
        ))}

        <div className="cusine-show-more-container">
        <button className="cusine-show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ▲" : "Show More Cities ▼ "}
        </button>
      </div>
      </div>

      {/* <div className="cusine-show-more-container">
        <button className="cusine-show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ▲" : "Show More Cities ▼ "}
        </button>
      </div> */}
    </div>
  );
};

export default BestCuisines;
