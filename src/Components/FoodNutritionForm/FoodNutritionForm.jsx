import React, { useState } from 'react';
import './FoodNutritionForm.css';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';

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
                kcal: Number(kcal), 
                fat: Number(fat), 
                saturatedFat: Number(saturatedFat), 
                carbs: Number(carbs), 
                sugar: Number(sugar), 
                protein: Number(protein), 
                fiber: Number(fiber)
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
        <Form onSubmit={handleSubmit} data-bs-theme="dark" className="nutrition-form">
            { submitError }
            { submitSuccess }
            <FormGroup>
                <Label htmlFor="food-name">Food Name</Label>
                <Input 
                    type="text" 
                    className="nutrition-input"
                    id="food-name" 
                    name="food-name" 
                    value={foodName} 
                    onChange={handleChange(setFoodName)}
                    placeholder="Food Name" 
                    required />
            </FormGroup>
            <FormGroup className="form-row">
                <Label htmlFor="kcal-input">KCal</Label>
                <Input 
                    type="number" 
                    className="nutrition-input"
                    id="kcal-input" 
                    name="kcal" 
                    placeholder="KCal"
                    value={kcal}
                    onChange={handleChange(setKcal)} 
                    min="0.0"
                    step="0.1" 
                    required />
            </FormGroup>
            <FormGroup className="form-row">
                <Label htmlFor="fat-input">Fat</Label>
                <Input 
                    type="number" 
                    className="nutrition-input"
                    id="fat-input" 
                    name="fat" 
                    placeholder="Fat"
                    value={fat}
                    onChange={handleChange(setFat)}  
                    min="0" 
                    step="0.1"
                    required />
            </FormGroup>
            <FormGroup className="form-row">
                <Label htmlFor="saturated-fat-input">Saturated Fat</Label>
                <Input 
                    type="number" 
                    className="nutrition-input"
                    id="saturated-fat-input" 
                    name="saturated-fat" 
                    placeholder="Saturated Fat" 
                    value={saturatedFat}
                    onChange={handleChange(setSaturatedFat)} 
                    min="0" 
                    step="0.1"
                    required />
            </FormGroup>
            <FormGroup className="form-row">
                <Label htmlFor="carbs-input">Carbohydrates</Label>
                <Input 
                    type="number" 
                    className="nutrition-input"
                    id="carbs-input" 
                    name="carbs" 
                    placeholder="Carbohydrates"
                    value={carbs}
                    onChange={handleChange(setCarbs)}  
                    min="0" 
                    step="0.1"
                    required />
            </FormGroup>
            <FormGroup className="form-row">
                <Label htmlFor="sugar-input">Sugar</Label>
                <Input 
                    type="number" 
                    className="nutrition-input"
                    id="sugar-input" 
                    name="sugar" 
                    placeholder="Sugar" 
                    value={sugar}
                    onChange={handleChange(setSugar)} 
                    min="0" 
                    step="0.1"
                    required />
            </FormGroup>
            <FormGroup className="form-row">
                <Label htmlFor="protein-input">Protein</Label>
                <Input 
                    type="number" 
                    className="nutrition-input"
                    id="protein-input" 
                    name="protein" 
                    placeholder="Protein"
                    value={protein}
                    onChange={handleChange(setProtein)}  
                    min="0" 
                    step="0.1"
                    required />
            </FormGroup>
            <FormGroup className="form-row">
                <Label htmlFor="fiber-input">Fiber</Label>
                <Input 
                    type="number" 
                    className="nutrition-input"
                    id="fiber-input" 
                    name="fiber" 
                    placeholder="Fiber" 
                    value={fiber}
                    onChange={handleChange(setFiber)} 
                    min="0" 
                    step="0.1"
                    required />
            </FormGroup>
            <div className="form-row">
                <Button type="submit" size="lg" color="primary">Add</Button>
            </div>
        </Form>
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