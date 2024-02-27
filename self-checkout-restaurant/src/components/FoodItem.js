import React, { useState, useEffect } from 'react';
import foodImage from '../Images/food.png';

const FoodItem = ({ name, weight, nutrition }) => {
  const [isTrayOnWeightingMachine, setTrayOnWeightingMachine] = useState(false);

  // Simulate checking if the tray is on the weighing machine on the later phase
  const checkWeightingMachine = () => {
    //will be Performing the actual logic here later on after we have hardware and other tools (e.g., integrated with hardware, data)
    // For now, just trying to simulating with a timeout to show something after the tray is here and contents will be displayed
    setTimeout(() => {
      setTrayOnWeightingMachine(true);
    }, 4000); // 4 seconds timeout, adjust as needed later on
  };

  useEffect(() => {
    checkWeightingMachine();
  }, []); 

  return (
    <div>
      {isTrayOnWeightingMachine ? (
        <>
          <h2>{name}</h2>
          <div>
            <img src={foodImage} alt={name} style={{ maxWidth: '30%', height: '10%' }} />
          </div>
          <p>Weight: {weight} grams</p>
          <p>Nutritional Values:</p>
          
          <ul>
            <li>Total Calories: {nutrition.calories} kCal</li>
            <li>Protein: {nutrition.protein} grams</li>
            <li>Carbs: {nutrition.carbs} grams</li>
            <li>Fat: {nutrition.fat} grams</li>
            <li>Salt: {nutrition.salt} grams</li>
            
          </ul>
        </>
      ) : (
        <p>Please put the food tray on the weighing machine to see the nutrients...</p>
      )}
    </div>
  );
};

export default FoodItem;