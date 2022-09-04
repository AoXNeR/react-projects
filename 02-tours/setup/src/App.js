import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newToursList = tours.filter((tour) => tour.id !== id);
    setTours(newToursList);
  }

  const fetchTours = async () => {
    try{
      const response = await fetch(url)
      const toursList =  await response.json();
      setIsLoading(false)
      setTours(toursList);
    }catch(err){
      console.log(err)
    }
  }

  useEffect( () => {
    fetchTours()
  }, [])

  return (
    <main>
      {isLoading ? (<Loading />) : (tours.length=== 0 ? (<div className='title'><h1>0 Tours Remaining</h1><button className='btn' onClick={fetchTours}>refresh</button></div>) : (<Tours tours={tours} removeTour={removeTour}/>))}
    </main>
  )
}

export default App
