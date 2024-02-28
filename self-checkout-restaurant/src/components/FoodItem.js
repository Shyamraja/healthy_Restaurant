import React, { useState, useEffect } from 'react';
import foodImage from '../Images/food.png';

const FoodItem = ({ name, weight, nutrition, onConfirm }) => {
  const [isTrayOnWeightingMachine, setTrayOnWeightingMachine] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedNutrition, setEditedNutrition] = useState({ ...nutrition });
  const [editedWeight, setEditedWeight] = useState(weight);

  const checkWeightingMachine = () => {
    setTimeout(() => {
      setTrayOnWeightingMachine(true);
    }, 4000);
  };

  useEffect(() => {
    checkWeightingMachine();
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    onConfirm(editedNutrition, editedWeight);
  };

  const handleConfirmClick = () => {
    onConfirm(nutrition, weight);
  };

  const handleNutritionChange = (event, key) => {
    const value = event.target.value;
    setEditedNutrition((prev) => ({ ...prev, [key]: value }));
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setEditedWeight(value);
  };

  return (
    <div>
      {isTrayOnWeightingMachine ? (
        <>
          <h2>{name}</h2>
          <div>
            <img src={foodImage} alt={name} style={{ maxWidth: '30%', height: '10%' }} />
          </div>
          {!editMode && (
            <>
              <ul>
                <li>
                  Protein: {nutrition.protein} grams ({nutrition.protein * 4} calories)
                </li>
                <li>
                  Carbs: {nutrition.carbs} grams ({nutrition.carbs * 4} calories)
                </li>
                <li>
                  Fat: {nutrition.fat} grams ({nutrition.fat * 9} calories)
                </li>
                <li>
                  Salt: {nutrition.salt} grams
                </li>
                <li>
                  Weight: {weight} grams
                </li>
                <li>
                  Total Nutritional Values: {weight * nutrition.calories} kCal
                </li>
              </ul>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleConfirmClick}>Confirm</button>
            </>
          )}
          {editMode && (
            <>
              <ul>
                <li>
                  Protein:{' '}
                  <input
                    type="text"
                    value={editedNutrition.protein}
                    onChange={(e) => handleNutritionChange(e, 'protein')}
                  />{' '}
                  grams ({editedNutrition.protein * 4} calories)
                </li>
                <li>
                  Carbs:{' '}
                  <input
                    type="text"
                    value={editedNutrition.carbs}
                    onChange={(e) => handleNutritionChange(e, 'carbs')}
                  />{' '}
                  grams ({editedNutrition.carbs * 4} calories)
                </li>
                <li>
                  Fat:{' '}
                  <input
                    type="text"
                    value={editedNutrition.fat}
                    onChange={(e) => handleNutritionChange(e, 'fat')}
                  />{' '}
                  grams ({editedNutrition.fat * 9} calories)
                </li>
                <li>
                  Salt:{' '}
                  <input
                    type="text"
                    value={editedNutrition.salt}
                    onChange={(e) => handleNutritionChange(e, 'salt')}
                  />{' '}
                  grams
                </li>
                <li>
                  Weight:{' '}
                  <input
                    type="text"
                    value={editedWeight}
                    onChange={(e) => handleWeightChange(e)}
                  />{' '}
                  grams
                </li>
                <li>
                  Total Nutritional Values: {editedWeight * nutrition.calories} kCal
                </li>
              </ul>
              <button onClick={handleSaveClick}>Save</button>
            </>
          )}
        </>
      ) : (
        <p>Please put the food tray on the weighing machine...</p>
      )}
    </div>
  );
};

export default FoodItem;
