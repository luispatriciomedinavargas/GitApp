import React, { useEffect,useState } from 'react'
import { getGifs } from '../helpers/getMovies';
import { MovieGridItem } from './MovieGridItem';

export const MovieGrid = ({search}) => {
    
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    getGifs(search)
    .then(movie=>{setMovies(movie)})
  },[])

  {
    Object.keys(movies).map((item,i)=>(
      <div key={i}>{movies[item].rating}</div>
    ))
  }
  return (
    <div className='card-grid'>
        {
            Object.keys(movies).map((item,i)=>(
              <MovieGridItem movie={movies[item]} key={i}/>
            ))
        }
      </div>
  )
}
