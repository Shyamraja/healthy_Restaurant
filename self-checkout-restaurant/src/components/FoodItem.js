import React, { useState, useEffect } from 'react';
import foodImage from '../Images/food.png';

const FoodItem = ({ name, weight, nutrition }) => {
  const [isTrayOnWeightingMachine, setTrayOnWeightingMachine] = useState(false);
  const [calories, setCalories] = useState(0);
  const [editMode, setEditMode] = useState(false);
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

  // Calculate total calories based on protein, carbs, and fat
  const proteinCalories = nutrition.protein * 4;
  const carbsCalories = nutrition.carbs * 4;
  const fatCalories = nutrition.fat * 9;
  const totalCalories = proteinCalories + carbsCalories + fatCalories;
  setCalories(totalCalories);
  }, []); 


  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Perform save logic or update API here
  };


  return (
    <div>
      {isTrayOnWeightingMachine ? (
        <>
          <h2>{name}</h2>
          <div>
            <img src={foodImage} alt={name} style={{ maxWidth: '30%', height: '10%' }} />
          </div>
          

          {editMode ? (
            // Display edit mode UI
            <>
              {/* Add input fields for editing */}
              <button onClick={handleSaveClick}>Confirm</button>
            </>
          ) : (
          <>
          <ul>
            <li>Protein: {nutrition.protein} grams ({nutrition.protein * 4} calories)</li>
            <li>Carbs: {nutrition.carbs} grams ({nutrition.carbs * 4} calories)</li>
            <li>Fat: {nutrition.fat} grams ({nutrition.fat * 9} calories)</li>
            <li>Salt: {nutrition.salt} grams</li>

            <p>Total Weight: {weight} grams</p>
            <p>Total Nutritional Values: {calories} kCal</p>
          </ul>
           {/* Add edit button */}
           <button onClick={handleEditClick}>Edit</button>
        </>
        )}
       </>
      ) : (
        <p>Please put the food tray on the weighing machine to see the nutrients...</p>
      )}
    </div>
  );
};

export default FoodItem;