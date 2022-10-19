import React from 'react';

const Menu = ({ setCategory }) => {
  return <>
    <div className='container'>
      <h2>Our Menu</h2>
      <div className="underline"></div>
    </div>
    <div className='container'>
      <button onClick={ () => setCategory('All') }>All</button>
      <button onClick={ () => setCategory('Breakfast') }>breakfast</button>
      <button onClick={ () => setCategory('Lunch') }>lunch</button>
      <button onClick={ () => setCategory('Shakes') }>shakes</button>
    </div>
  </>
};

export default Menu;
