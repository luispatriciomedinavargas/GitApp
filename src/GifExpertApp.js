import React, { useState } from 'react'
import { AddMovie } from './components/AddMovies';
import { MovieGrid } from './components/MovieGrid';

export const GifExpertApp = () => {
    const [search, setSearch] = useState(['Stars Wars']);


    return (
        <div>
       <div>
       <h2>GifExpertApp</h2>
         <AddMovie setCategories={setSearch}/>
         <hr/>
       </div>
          { 
            search.map((movie) => 
            <MovieGrid 
              key={movie}
            search={movie}/>
            )
        }
    </div>
  )
}
