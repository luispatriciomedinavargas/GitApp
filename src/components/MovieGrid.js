import React, { useEffect,useState } from 'react'
import { MovieGridItem } from './MovieGridItem';

export const MovieGrid = () => {
    
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    getGifs()
  },[])
    const getGifs=async()=>{
        const url='http://api.tvmaze.com/search/shows?q=star%20wars.'
      const reps=await fetch(url);
      const data= await reps.json();
      const a =data.map(a=>{
        return{
          id:a.show.id,
          name:a.show.name,
          rating: a.show.rating.average,
          image:a.show.image.original,
          summary:a.show.summary
        }
      })
      setMovies(a)
  }
  {
    Object.keys(movies).map((item,i)=>(
      <div key={i}>{movies[item].rating}</div>
    ))
  }
  return (
    <div className="card h-100">
      <div className="card-body">
        {
            Object.keys(movies).map((item,i)=>(
              <MovieGridItem movie={movies[item]} key={i}/>
            ))
        }
      </div>
    </div>
  )
}
