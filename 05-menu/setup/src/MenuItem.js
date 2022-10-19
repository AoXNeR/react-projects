import React, {useState} from 'react';

const MenuItem = ({ details }) => {

    const {id, title, category, price, img} = details;

    return <>
        <div className='item'>
            <h2>{title}</h2>
            <h4>{category}</h4>
            <h4>{price}$</h4>
            <img src={img} alt={title}></img>
        </div>
    </>
};  
export default MenuItem;