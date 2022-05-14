import React from 'react'

export const MovieGrid = ({category: movie}) => {
    
    const getGifs=async()=>{
    const url='http://api.tvmaze.com/search/shows?q=star%20wars.'
   const reps=await fetch(url);
  const data= await reps.json();
  console.log(data)
    }
    getGifs();
  return (
    <div>
        <h3>{movie}</h3>
    </div>
  )
}
