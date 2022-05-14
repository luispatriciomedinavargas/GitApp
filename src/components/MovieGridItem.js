import React, { Fragment } from 'react'

export const MovieGridItem = (movie) => {
  return (
      <div  className='card'>

    <h1 >
        {movie.movie.name}
    </h1>
    <img src={movie.movie.image} alt="..."/>
    <p> {movie.movie.summary}</p>
    <p> {movie.movie.rating}</p>

    </div>
  )
}