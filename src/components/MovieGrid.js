import React, { Fragment, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFetchMovies } from '../hooks/useFetchMovie';
import { MovieGridItem } from './MovieGridItem';


export const MovieGrid = ({search}) => {
    
  const {data,loading} = useFetchMovies(search);
  useEffect(()=>{
    
  },[])

 
 
  return (
      <Fragment>
        {loading && <p>Loading....</p>}
     <div className='card-grid'>   
     <InfiniteScroll
     dataLength={data.length}
     hasMore={true}
     next={useFetchMovies(search)}
     loader={<h4>Loading...</h4>}
     >      
         {
             Object.keys(data).map((item,i)=>(
               <MovieGridItem movie={data[item]} key={i}/>
             ))
         }
       </InfiniteScroll>
       </div>
    </Fragment>
  )
}
