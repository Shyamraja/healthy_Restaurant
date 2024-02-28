import React, { useState } from 'react';
import FoodItem from './FoodItem';

const Home = () => {
  const [foodItems, setFoodItems] = useState([
    { name: 'The food Item Contains Following Nutrients', weight: 200, nutrition: { calories: 150, protein: 10, carbs: 20, fat: 5, salt:2} },
  ]);

  const handleEditItem = (index) => {
    // Need to add the logic for handling the edit action for a specific item/items later on
    // May need to open a new modal page for editing the foor items or navigate to a separate edit then
    console.log('Edit item:', index);
  };

  return (
    <div>
      <h1>Flavoria Flex Restaurant Nutrition Tracking</h1>
      {foodItems.map((item, index) => (
        <FoodItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Home;
