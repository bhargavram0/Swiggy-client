import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const dishes = [
"Panner", "Rasgulla", "Brownie", "Mushroom Masala", "Butter Naan", "Dahi Vada", "Mutton Curry", "Veg Pizza",
  "French Fries", "Fried Chicken", "Idli", "Poori", "Samosa Chaat", "Burritos", "Paneer Butter Masala", "Dal Chawal",
  "Chicken Pizza", "Chilli Chicken", "Spring Roll", "Puff", "Tandoori Roti", "Samosa", "Cookies", "Veg Momos", "Rice",
  "Juices", "Bajji", "Puttu", "Egg Puff", "Halwa", "Donuts", "Chicken Pakoda", "Mutton Masala", "Thandai", "Chicken Sandwich",
  "Fried Rice", "Kulcha", "Chicken Rice", "Butter Roti", "Lasagna", "Steak", "Dal Makhani", "Noodles", "Rabdi", "Corn Pizza",
  "Motichur Laddu", "Vanilla Ice Cream", "Vada Pav", "Chicken Burger", "Chicken Tikka Masala", "Chur Chur Naan", "Curd", "Naan",
  "Pineapple Cake", "Tea", "Dal Fry", "Veg Biryani", "Sabudana Khichdi", "Crispy Corn", "Garlic Naan", "Frankie", "Sev Puri",
  "Prawns Biryani", "Chapati", "Khandvi", "Chicken Lollipop", "Paratha", "Fish Fry", "Paneer Tikka Masala", "Roasted Chicken",
  "Kadai Chicken", "Andhra Meals", "Chhole Bhature", "Rasmalai Cake", "Paneer Lababdar", "Veg Curry", "Grilled Chicken",
  "Paneer Chilli", "Butter Chicken", "Hakka Noodles", "Bhaji", "Chicken Wings", "Fruit Bowl", "Rumali Roti", "Egg Bhurji",
  "Egg Fried Rice", "Paneer Masala", "Kaju Katli", "Mirchi Bajji", "Pastry", "Paneer Paratha", "Biryani Rice", "Plum Cake",
  "Veg Thali", "Soup", "Jeera Rice", "Tomato Soup", "Veg Puff", "Bread", "Dal", "Rava Idli", "Veg Manchow Soup", "Veg Meals",
  "Cold Drink", "Shawarma", "Tomato Rice", "Fish Curry", "Dal Tadka", "Palak Paneer", "Butter Milk", "Dabeli", "Rajma Chawal",
  "Ragi Mudde", "Chicken Shawarma", "Appam", "Chai", "Beef Biryani", "Filter Coffee", "Kebab", "Watermelon Juice", "Misal Pav",
  "Bhel", "Chaap", "Chicken Fried Rice", "Kheer", "Chicken Handi", "Gol Gappe", "Parotta", "Wraps", "Hyderabadi Biryani",
  "Peri Peri Fries", "Sambar", "Coconut Water", "Lassi", "Paneer Fried Rice", "Soya Chaap", "Chicken Tikka", "Nachos",
  "Cold Coffee", "Margherita Pizza", "Jalebi", "Chicken", "Dhokla", "Vada", "Rasmalai", "Kadai Paneer", "Paneer Roll", "Rabri",
  "Sandwich", "Chicken Roll", "Rasam", "Kalakand", "Mineral Water", "Veg Pulao", "Butterscotch Cake", "Fish Biryani",
  "Garlic Breads", "Honey Chilli Potato", "Paneer Tikka", "Croissant", "Hummus", "Puran Poli", "Chicken Kothu Parotta",
  "Idli Sambar", "Mutton Rogan Josh", "Paya", "Plain Dosa", "Dahi", "Ghee Rice", "Cheese Pizza", "Pani Puri", "Chicken Curry",
  "Masala Dosa", "Pancake", "Papdi Chaat", "Sabudana Vada", "Egg Noodles", "Pepper Chicken", "Coffee", "Gajar Halwa",
  "Shahi Paneer", "Veg Roll", "Chinese Bhel", "Veg Sandwich", "Phulka", "Aloo Tikki", "Moong Dal Halwa", "Salad", "Milk Cake",
  "Chicken Shawarma Roll", "Chicken Butter Masala", "Soda", "Chicken Gravy", "Malai Kofta", "White Sauce Pasta", "Egg Rice",
  "Momos", "English Breakfast", "Mutton Biryani", "Falooda", "Egg Biryani", "Pothichoru", "Pulao", "Veg Fried Rice",
  "Chicken Biryani", "Chicken Crispy", "Chicken Popcorn", "Dal Bati", "Rajma", "Al Faham", "Chicken Chilli", "Chicken Korma",
  "Milkshakes", "Boiled Egg", "Gobi", "Hot Coffee", "Laccha Paratha", "Tandoori Chicken", "Blueberry Cheesecake",
  "Sambar Rice", "Veg Burger", "Beef Fry", "Bread Pakoda", "Fafda", "Gujiya", "Dal Khichdi", "Maggi", "Bun Maska", "Rasam Rice",
  "Chicken Mandi", "Chole Bhature", "Chicken Manchow Soup", "Chow Mein", "Amritsari Kulcha", "Chicken Masala", "Non Veg Thali",
  "Chicken Noodles", "Dal Rice", "Fries", "Fruit Salads", "Cake", "Tacos", "Dosa", "Chicken Manchurian", "Fish Finger",
  "Kachori", "Chicken Kebab", "Egg Curry", "Litti Chokha", "Paya Soup", "Broasted Chicken", "Tiramisu", "Upma",
  "Chicken Salad", "Lemon Rice", "Manchow Soup", "Roti", "Chilli Potato", "Chana Masala", "Gulab Jamun", "Cupcake",
  "Chicken Nuggets", "Pav Bhaji", "Meals", "Veg Spring Roll", "Veg Manchurian", "Khichdi", "Kulfi", "Bread Omelette",
  "Kerala Parotta", "Veg Noodles", "Aloo Paratha", "Chicken Momos", "Dum Biryani", "Paneer Pizza", "Veg Hakka Noodles",
  "Curry", "Egg Masala", "Hot Chocolate", "Orange Juice", "Full Meals", "Manchurian", "Poha", "Mutton Soup", "Pulka",
  "Dahi Bhalla", "Kothu Parotta", "Muffin", "Choco Lava Cake", "Egg Roll", "Chicken Dum Biryani", "Chicken Soup",
  "Paneer Bhurji", "Fruit Cake", "Paneer Biryani", "Sabji", "South Indian Thali", "Pasta", "Gajar Ka Halwa", "Masala Puri"

];

const PopularDish = () => {
  const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

  const visibleDishes = showAll ? dishes : dishes.slice(0, 10);

  const handleClick = (dishes) => {
    const slug = dishes.toLowerCase().replace(/\s+/g, '-');
    navigate(`/dishes/${slug}`);
  };

  return (
    <div className="best-dishes-container">
      <h2>Popular Dishe Near Me</h2>
      <div className="dishes-grid">
        {visibleDishes.map((dish) => (
          <div className="cuisine-card" key={dish} onClick={() => handleClick(dish)}>
            {dish} Near Me
          </div>
        ))}

        <div className="popular-show-more-container">
        <button className="popular-show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ▲" : "Show More Cities ▼ "}
        </button>
      </div>
      </div>

      {/* <div className="popular-show-more-container">
        <button className="popular-show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ▲" : "Show More Cities ▼ "}
        </button>
      </div> */}
    </div>
  );
};

export default PopularDish;
