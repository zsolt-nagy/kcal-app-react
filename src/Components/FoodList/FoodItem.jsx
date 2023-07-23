import React from 'react';

export default function FoodItem({ data }) {
    let { foodName, kcal, fat, saturatedFat, carbs, sugar, fiber, protein } = data;
    return (
        <li>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">{ foodName }</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>kcal</th>
                        <td>{ kcal }</td>
                    </tr>
                    <tr>
                        <th>Fat</th>
                        <td>{ fat }</td>
                    </tr>
                    <tr>
                        <th>Saturated Fat</th>
                        <td>{ saturatedFat }</td>
                    </tr>
                    <tr>
                        <th>Carbohydrates</th>
                        <td>{ carbs }</td>
                    </tr>
                    <tr>
                        <th>Sugar</th>
                        <td>{ sugar }</td>
                    </tr>
                    <tr>
                        <th>Protein</th>
                        <td>{ protein }</td>
                    </tr>
                    <tr>
                        <th>Fiber</th>
                        <td>{ fiber }</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
}

/*
        {
            foodName: "Cooked Broccoli",
            kcal: 35,
            fat: 0.4,
            saturatedFat: 0,
            carbs: 7.2,
            sugar: 1.4,
            fiber: 3.3,
            protein: 2.4,
        },
*/