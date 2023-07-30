import React from 'react';
import FoodItem from './FoodItem';
import './FoodList.css';

export default function FoodList({ foodItems }) {
    
    let FoodItemListJsx = foodItems.map(item => <FoodItem data={item} key={ item.foodName } />)

    return (
        <ul className="food-list-container">{ FoodItemListJsx }</ul>
    );
}