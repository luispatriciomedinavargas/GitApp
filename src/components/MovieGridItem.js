import React, { Fragment } from 'react'

export const MovieGridItem = (movie) => {
    console.log(movie)
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
{/* <div className="container">
<div className="row">
  <div className='col-3'>
<h5 className="card-titlecol-4">
    {movie.movie.name}
</h5>
<p className="card-text col-4">  {movie.movie.rating}</p>
<p className="card-text ">  {movie.movie.summary}</p>
<img src={movie.movie.image} className="card-img-top" alt="..."/>

</div>
</div>
</div> */}