import React from 'react';
import FoodItem from './FoodItem';

export default function FoodList({ foodItems }) {
    
    let FoodItemListJsx = foodItems.map(item => <FoodItem data={item} key={ item.foodName } />)

    return (
        <ul>{ FoodItemListJsx }</ul>
    );
}
