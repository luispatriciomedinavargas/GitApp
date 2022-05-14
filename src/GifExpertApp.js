import React, { useState } from 'react'
import { AddMovie } from './components/AddMovies';
import { MovieGrid } from './components/MovieGrid';

export const GifExpertApp = () => {
    const [search, setSearch] = useState(['Stars Wars']);


    return (
        <div>
         <h2>GifExpertApp</h2>
         <AddMovie setCategories={setSearch}/>
         <hr/>
        <ol>
          { 
            search.map((movie) => 
            <MovieGrid 
              key={movie}
            search={movie}/>
            )
        }
        </ol>
    </div>
  )
}
