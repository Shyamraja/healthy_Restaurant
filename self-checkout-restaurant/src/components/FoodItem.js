import React, { useState, useEffect } from "react";
import foodImage from "../Images/food.png";
import { Button, Spinner, ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
//import { Pie } from "react-chartjs-2";
import PieChart from "./PieChart"; 

const FoodItem = ({ name, weight, nutrition, onConfirm }) => {
    const [isTrayOnWeightingMachine, setTrayOnWeightingMachine] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedNutrition, setEditedNutrition] = useState({ ...nutrition });
    const [editedWeight, setEditedWeight] = useState(weight);
    const [isLoading, setIsLoading] = useState(false);

    const checkWeightingMachine = () => {
        setIsLoading(true);
        setTimeout(() => {
            setTrayOnWeightingMachine(true);
            setIsLoading(false);
        }, 4000);
        console.log("The scanning is being done");
    };

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsLoading(true);
            setTrayOnWeightingMachine(true);
        }, 4000);

        const timer2 = setTimeout(() => {
            setIsLoading(false);
        }, 8000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        onConfirm(editedNutrition, editedWeight);
    };

    const handleCancelClick = () => {
        setEditMode(false);
    };

    const handleConfirmClick = () => {
        onConfirm(nutrition, weight);
    };

    const handleWeightChange = (event) => {
        const value = parseFloat(event.target.value);
        setEditedWeight(value);
    };

    const handleNutritionChange = (event, key) => {
        const value = event.target.value;
        setEditedNutrition((prev) => ({ ...prev, [key]: value }));
    };

    const totalWeight =
        parseFloat(editedNutrition.protein) +
        parseFloat(editedNutrition.carbs) +
        parseFloat(editedNutrition.fat) +
        parseFloat(editedNutrition.salt);
    const totalCalories =
        editedNutrition.protein * 4 +
        editedNutrition.carbs * 4 +
        editedNutrition.fat * 9;
   

    return (
        <div>
            
            {!isTrayOnWeightingMachine && !isLoading && (
                <p>Please put the food item in the weighing machine.</p>
            )}

            {!isLoading && isTrayOnWeightingMachine && (
                <>
                    <div>
                    
                    
                    <PieChart nutrition={nutrition} /> 
                    
                    
                    </div>
                    

                    {!editMode && (
                        <>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <ListGroup style={{ width: "1000px" }}>
                                    <ListGroupItemHeading>
                                        <ListGroupItem color="success">{name}</ListGroupItem>
                                    </ListGroupItemHeading>

                                    <ListGroupItem color="info">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <span>Protein:</span>
                                            <span>
                                                {nutrition.protein} grams ({nutrition.protein * 4}{" "}
                                                calories)
                                            </span>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem color="info">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <span>Carbs:</span>
                                            <span>
                                                {nutrition.carbs} grams ({nutrition.carbs * 4} calories)
                                            </span>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem color="info">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <span>Fat:</span>
                                            <span>
                                                {nutrition.fat} grams ({nutrition.fat * 9} calories)
                                            </span>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem color="info">
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <span>Salt:</span>
                                            <span>{nutrition.salt} grams</span>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <span>Total Weight:</span>
                                            <span>{totalWeight} grams</span>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <span>Total Nutritional Values:</span>
                                            <span>{totalCalories} kCal</span>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    color="primary"
                                    style={{ margin: "5px 10px", padding: "10px", width: "90px" }}
                                    onClick={handleEditClick}
                                >
                                    Edit
                                </Button>
                                <Button
                                    color="primary"
                                    style={{ margin: "5px 10px", padding: "10px", width: "90px" }}
                                    onClick={handleConfirmClick}
                                >
                                    Confirm
                                </Button>
                            </div>
                        </>
                    )}

                    {editMode && (
                        <>
                            <ListGroup>
                                <ListGroupItem>
                                    Protein:
                                    <input
                                        type="text"
                                        value={editedNutrition.protein}
                                        onChange={(e) => handleNutritionChange(e, "protein")}
                                    />
                                    grams ({editedNutrition.protein * 4} calories)
                                </ListGroupItem>
                                <ListGroupItem>
                                    Carbs:
                                    <input
                                        type="text"
                                        value={editedNutrition.carbs}
                                        onChange={(e) => handleNutritionChange(e, "carbs")}
                                    />
                                    grams ({editedNutrition.carbs * 4} calories)
                                </ListGroupItem>
                                <ListGroupItem>
                                    Fat

:
                                    <input
                                        type="text"
                                        value={editedNutrition.fat}
                                        onChange={(e) => handleNutritionChange(e, "fat")}
                                    />
                                    grams ({editedNutrition.fat * 9} calories)
                                </ListGroupItem>
                                <ListGroupItem>
                                    Salt:
                                    <input
                                        type="text"
                                        value={editedNutrition.salt}
                                        onChange={(e) => handleNutritionChange(e, "salt")}
                                    />
                                    grams
                                </ListGroupItem>
                                <ListGroupItem>
                                    Total Nutritional Values: {totalCalories} kCal
                                </ListGroupItem>
                                <ListGroupItem>
                                    Total Weight:
                                    <input
                                        type="text"
                                        value={totalWeight}
                                        onChange={handleWeightChange}
                                    />
                                    grams
                                </ListGroupItem>
                            </ListGroup>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    color="primary"
                                    style={{ margin: "5px 10px", padding: "10px", width: "90px" }}
                                    onClick={handleSaveClick}
                                >
                                    Save
                                </Button>
                                <Button
                                    color="primary"
                                    style={{ margin: "5px 10px", padding: "10px", width: "90px" }}
                                    onClick={handleCancelClick}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </>
                    )}
                </>
            )}

            {isLoading && (
                <>
                    <div style={{ textAlign: "center" }}>
                        <p>...Scanning the food item for Nutrients and weights</p>
                        <Spinner
                            style={{ width: "5rem", height: "5rem" }}
                            color="primary"
                            type="grow"
                        />
                        <Spinner
                            style={{ width: "5rem", height: "5rem" }}
                            color="secondary"
                            type="grow"
                        />
                        <Spinner
                            style={{ width: "5rem", height: "5rem" }}
                            color="primary"
                            type="grow"
                        />
                        <Spinner
                            style={{ width: "5rem", height: "5rem" }}
                            color="secondary"
                            type="grow"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default FoodItem;

