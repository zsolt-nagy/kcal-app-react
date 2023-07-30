import React, { useState } from 'react';
import './FoodNutritionForm.css';

export default function FoodNutritionForm({ isNameUnique, addItem }) {
    const [foodName, setFoodName] = useState("");
    const [kcal, setKcal] = useState("");
    const [fat, setFat] = useState("");
    const [saturatedFat, setSaturatedFat] = useState("");
    const [carbs, setCarbs] = useState("");
    const [sugar, setSugar] = useState("");
    const [protein, setProtein] = useState("");
    const [fiber, setFiber] = useState("");

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = setter => event => setter(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        let trimmedFoodName = foodName.trim();

        if (isNameUnique(trimmedFoodName)) {
            addItem({
                foodName: trimmedFoodName, 
                kcal, 
                fat, 
                saturatedFat, 
                carbs, 
                sugar, 
                protein, 
                fiber
            });

            setFoodName("");
            setKcal("");
            setFat("");
            setSaturatedFat("");
            setCarbs("");
            setSugar("");
            setProtein("");
            setFiber("");

            setError("");
            setSuccessMessage(`${trimmedFoodName} has been added.`);
            setTimeout(() => setSuccessMessage(""), 6000);
        } else {
            setError(`The food name ${trimmedFoodName} already exists.`);
            setSuccessMessage("");
        }
    }

    let submitError = null;
    if (error.length > 0) {
        submitError = (
            <div className="error notification">
                { error }
            </div>            
        );
    }

    let submitSuccess = null;
    if (successMessage.length > 0) {
        submitSuccess = (
            <div className="success notification">
                { successMessage }
            </div>            
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            { submitError }
            { submitSuccess }
            <div className="form-row">
                <label htmlFor="food-name">Food Name</label>
                <input 
                    type="text" 
                    id="food-name" 
                    name="food-name" 
                    value={foodName} 
                    onChange={handleChange(setFoodName)}
                    placeholder="Food Name" 
                    required />
            </div>
            <div className="form-row">
                <label htmlFor="kcal-input">KCal</label>
                <input 
                    type="number" 
                    id="kcal-input" 
                    name="kcal" 
                    placeholder="KCal"
                    value={kcal}
                    onChange={handleChange(setKcal)} 
                    min="0.0"
                    step="0.1" 
                    required />
            </div>
            <div className="form-row">
                <label htmlFor="fat-input">Fat</label>
                <input 
                    type="number" 
                    id="fat-input" 
                    name="fat" 
                    placeholder="Fat"
                    value={fat}
                    onChange={handleChange(setFat)}  
                    min="0" 
                    step="0.1"
                    required />
            </div>
            <div className="form-row">
                <label htmlFor="saturated-fat-input">Saturated Fat</label>
                <input 
                    type="number" 
                    id="saturated-fat-input" 
                    name="saturated-fat" 
                    placeholder="Saturated Fat" 
                    value={saturatedFat}
                    onChange={handleChange(setSaturatedFat)} 
                    min="0" 
                    step="0.1"
                    required />
            </div>
            <div className="form-row">
                <label htmlFor="carbs-input">Carbohydrates</label>
                <input 
                    type="number" 
                    id="carbs-input" 
                    name="carbs" 
                    placeholder="Carbohydrates"
                    value={carbs}
                    onChange={handleChange(setCarbs)}  
                    min="0" 
                    step="0.1"
                    required />
            </div>
            <div className="form-row">
                <label htmlFor="sugar-input">Sugar</label>
                <input 
                    type="number" 
                    id="sugar-input" 
                    name="sugar" 
                    placeholder="Sugar" 
                    value={sugar}
                    onChange={handleChange(setSugar)} 
                    min="0" 
                    step="0.1"
                    required />
            </div>
            <div className="form-row">
                <label htmlFor="protein-input">Protein</label>
                <input 
                    type="number" 
                    id="protein-input" 
                    name="protein" 
                    placeholder="Protein"
                    value={protein}
                    onChange={handleChange(setProtein)}  
                    min="0" 
                    step="0.1"
                    required />
            </div>
            <div className="form-row">
                <label htmlFor="fiber-input">Fiber</label>
                <input 
                    type="number" 
                    id="fiber-input" 
                    name="fiber" 
                    placeholder="Fiber" 
                    value={fiber}
                    onChange={handleChange(setFiber)} 
                    min="0" 
                    step="0.1"
                    required />
            </div>
            <div className="form-row">
                <button type="submit">Add</button>
            </div>
        </form>
    );
}
/*
        {
            fat: 0.4,
            saturatedFat: 0,
            carbs: 7.2,
            sugar: 1.4,
            fiber: 3.3,
            protein: 2.4,
        },
*/