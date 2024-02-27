import React from 'react';
import foodImage from '../Images/food.png'; 

const FoodItem = ({ name, weight, nutrition }) => {
  return (


    <div>
      <h2>{name}</h2>
      <div>
         <img src= {foodImage} alt={name} style={{ maxWidth: '25%', height: 'auto' }} />
         {/* ... rest of the component */}
       </div>

      <p>Weight: {weight} grams</p>
      <p>Nutritional Values:</p>
      
       <ul>
        <li>Calories: {nutrition.calories}kcal</li>
        <li>Protein: {nutrition.protein}kcal</li>
        <li>Carbs: {nutrition.carbs}kcal</li>
        <li>Fat: {nutrition.fat}kcal</li>
      </ul>
    </div>
  );
};

export default FoodItem;
