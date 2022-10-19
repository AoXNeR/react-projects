import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [relevantCategory, setRelevantCategory] = useState('All');


  return <>
    <Menu setCategory={setRelevantCategory}/>
    <Categories category={relevantCategory} items={items}/>
  </>
}

export default App;
