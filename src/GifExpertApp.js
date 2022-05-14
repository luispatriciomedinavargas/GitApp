import React, { useState } from 'react'
import { AddMovie } from './components/AddMovies';
import { MovieGrid } from './components/MovieGrid';

export const GifExpertApp = () => {
    const [movies, setMovies] = useState(['One Punch']);


    return (
        <div>
         <h2>GifExpertApp</h2>
         <AddMovie setCategories={setMovies}/>
         <hr/>
        <ol>
          { 
            movies.map((movie) => 
            <MovieGrid 
              key={movie}
            movie={movie}/>
            )
        }
        </ol>
    </div>
  )
}
