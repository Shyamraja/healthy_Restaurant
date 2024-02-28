import React, { useState } from 'react';
import FoodItem from './FoodItem';

const Home = ({ onConfirm, onReset }) => {
  const initialFoodItems = [
    { name: 'Food Item 1', weight: 200, nutrition: { calories: 150, protein: 10, carbs: 20, fat: 5, salt: 2 } },
    // Add more initial food items as needed
  ];
  const [foodItems, setFoodItems] = useState(initialFoodItems);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleConfirmOrder = (updatedNutrition, updatedWeight) => {
    // Logic to confirm the order
    // May involve sending the updated nutritional information to a server or performing other actions
    console.log('Order confirmed with updated nutrition and weight:', updatedNutrition, updatedWeight);
    setOrderConfirmed(true);
  };


  return (
    <div>
      <h1>Flavoria Flex Restaurant Nutrition Tracking</h1>
      {orderConfirmed ? (
        <>
          <p>Your order is confirmed. Scan your card to pay, please.</p>
        </>
      ) : (
        foodItems.map((item, index) => (
          <FoodItem
            key={index}
            {...item}
            onConfirm={(nutrition, weight) => handleConfirmOrder(nutrition, weight)}
          />
        ))
      )}
    </div>
  );
};

export default Home;
