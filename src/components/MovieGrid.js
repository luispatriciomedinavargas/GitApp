import React, { Fragment } from 'react'
import { useFetchMovies } from '../hooks/useFetchMovie';
// import { getGifs } from '../helpers/getMovies';
import { MovieGridItem } from './MovieGridItem';

export const MovieGrid = ({search}) => {
    
  // const [movies, setMovies] = useState([]);

  const { loading} = useFetchMovies();
  // useEffect(()=>{
  //   getGifs(search)
  //   .then(movie=>{setMovies(movie)})
  // },[])
  return (
      <Fragment>
    {loading ? 'Search...' : 'all right!'}
    
      {/* // <div className='card-grid'>
      //     
    //         Object.keys(movies).map((item,i)=>(
    //           <MovieGridItem movie={movies[item]} key={i}/>
    //         ))
    //     }
    //   </div> */}
    </Fragment>
  )
}
