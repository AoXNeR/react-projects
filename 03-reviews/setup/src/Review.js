import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  function prevClick() {
    return setIndex(checkFaulty(index -1))
  }

  function nextClick() {
    return setIndex(checkFaulty(index +1))
  }

  function checkFaulty(indexNumber) {
    if(indexNumber > people.length -1 )
      return 0;
    if(indexNumber < 0) {
      console.log(people.length-1)
      return people.length -1;
    }
    return indexNumber;
  }

  function randomClick() {
    let randomNumber = Math.floor(Math.random()*people.length)
    if(randomNumber === index){
      return nextClick();
    }
    return setIndex(randomNumber);
  }

return <>
    <section>
      <div className="img-container">
        <img className='person-img' src={image} alt={name}></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='center-span'>
        <button className='prev-btn' onClick={prevClick}><FaChevronLeft /></button>
        <button className='next-btn' onClick={nextClick}><FaChevronRight /></button>
      </div>
        <button className='random-btn' onClick={randomClick}>Random</button>
    </section>
  </>
};

export default Review;
