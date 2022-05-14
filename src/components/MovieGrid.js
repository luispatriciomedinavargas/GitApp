import React, { Fragment } from 'react'
import { useFetchMovies } from '../hooks/useFetchMovie';
import { MovieGridItem } from './MovieGridItem';

export const MovieGrid = ({search}) => {
    

  const {data,loading} = useFetchMovies(search);
  return (
      <Fragment>
        {loading && <p>Loading....</p>}
     <div className='card-grid'>         
         {
             Object.keys(data).map((item,i)=>(
               <MovieGridItem movie={data[item]} key={i}/>
             ))
         }
       </div>
    </Fragment>
  )
}
