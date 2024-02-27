import React, { useState } from 'react';
import FoodItem from './FoodItem';

const Home = () => {
  const [foodItems, setFoodItems] = useState([
    { name: 'The food Item Contains Following Nutrients', weight: 200, nutrition: { calories: 150, protein: 10, carbs: 20, fat: 5 } },
  ]);

  return (
    <div>
      <h1>Flavoria Flex Restaurant</h1>
      {foodItems.map((item, index) => (
        <FoodItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Home;
