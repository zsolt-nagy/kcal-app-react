import "./App.css";
import React, { useState, useEffect } from "react";
import FoodList from "./Components/FoodList/FoodList";
import FoodNutritionForm from "./Components/FoodNutritionForm/FoodNutritionForm";

export default function App() {
    const [foodItems, setFoodItems] = useState([]);

    function loadData() {
        fetch("https://ry2p8g-8080.csb.app/api/food")
            .then((x) => x.json())
            .then((itemList) => {
                setFoodItems(itemList);
            });
    }

    useEffect(loadData, []);

    /**
     * PRE: trimmedItemName is trimmed.
     */
    function isNameUnique(trimmedItemName) {
        return !foodItems.some((item) => item.foodName === trimmedItemName);
    }

    function addItem(item) {
        fetch("https://ry2p8g-8080.csb.app/api/food/new", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((x) => x.json())
            .then((itemList) => {
                setFoodItems(itemList);
            });
    }

    return (
        <div className="App">
            <h1>KCal App</h1>
            <FoodNutritionForm isNameUnique={isNameUnique} addItem={addItem} />
            <FoodList foodItems={foodItems} />
        </div>
    );
}
