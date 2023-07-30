import React from 'react';

export default function FoodItem({ data }) {
    let { foodName, kcal, fat, saturatedFat, carbs, sugar, fiber, protein } = data;

    function macroValueFormat(value) {
        return value.toFixed(1);
    }

    return (
        <li className="food-item">
            <table className='food-table'>
                <thead>
                    <tr>
                        <th colSpan="2" className="food-name-cell">{ foodName }</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>kcal</th>
                        <td>{ kcal }</td>
                    </tr>
                    <tr>
                        <th>Fat</th>
                        <td>{ macroValueFormat(fat) }</td>
                    </tr>
                    <tr>
                        <th>Saturated Fat</th>
                        <td>{ macroValueFormat(saturatedFat) }</td>
                    </tr>
                    <tr>
                        <th>Carbohydrates</th>
                        <td>{ macroValueFormat(carbs) }</td>
                    </tr>
                    <tr>
                        <th>Sugar</th>
                        <td>{ macroValueFormat(sugar) }</td>
                    </tr>
                    <tr>
                        <th>Protein</th>
                        <td>{ macroValueFormat(protein) }</td>
                    </tr>
                    <tr>
                        <th>Fiber</th>
                        <td>{ macroValueFormat(fiber) }</td>
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