import React, {useState} from 'react';
import MenuItem from './MenuItem.js';

const Categories = ({ category, items }) => {
  let newItems = items.filter( (item) => item.category === category.toLowerCase())
  if (newItems.length === 0) {
    console.log('initiated');
    newItems = items;
  }

  return <>
    <div className="container">
      { newItems.map((item) => <MenuItem key={item.id} details={item}/>)}
    </div>
  </>
};

export default Categories;
