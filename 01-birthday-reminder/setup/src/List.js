import React from 'react';
//import articles from './../../../20-dark-mode/final/src/data';

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
