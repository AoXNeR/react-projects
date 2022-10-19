import React, { useState, useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({props}) => {

  const [answerState, setAnswerState] = useState(false);
  const {id, title, info} = props;
  
  function toggleAnswer(){
    setAnswerState((prevState) => !prevState)
    if (refToggle.current.innerHTML === '+') {
      refToggle.current.innerHTML = '-';
    } else {
      refToggle.current.innerHTML = '+';
    }
  }

  const refToggle = useRef(null)

  return <>
    <div className='container'>
      <div>
        <h3 className="title">{title}</h3>
        <button className='toggleAnswer' ref={refToggle} onClick={toggleAnswer}>+</button>
      </div>
      {answerState && <p className="info">{info}</p>}
    </div>
    
  </>;
};

export default Question;
