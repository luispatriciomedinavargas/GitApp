import { useEffect, useState } from "react"
import {getMovies} from '../helpers/getMovies'
export const useFetchMovies=(search)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });

  useEffect(()=>{
    getMovies(search)
        .then(movies=>{
           
           setTimeout(() => {
            setState({
                data:movies,
                loading:false
            });
           
           });
        })
  },[search])

    return state;
}