import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <>
    <h1>Questions And Answers About Login</h1>
    {data.map((info) => {return <SingleQuestion key={info.id} props={info}/>})}
  </>;
}

export default App;
