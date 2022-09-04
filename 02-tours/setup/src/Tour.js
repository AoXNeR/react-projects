import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {

  const [readMore, setReadMore] = useState(false);

  function clickedShow(event) {
    setReadMore(!readMore)
  }

  function removeThisTour(event) {
    removeTour(id);
  }

  return (<article className="single-tour">
    <img src={image} alt={name} className="img"/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}<button onClick={clickedShow}>{readMore?`Show less`:`Show more`}</button></p>
      <button className="delete-btn" onClick={removeThisTour}>Not Interested</button>
    </footer>
    </article>
  )


};

export default Tour;
