import { useState } from "react"

export const useFetchMovies=()=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    return state;
}