import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = ( category ) => {
    const [state, setState] = useState({
        data: [], 
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                console.log( imgs );
                setState({
                    data: imgs,
                    loading: false
                })    
            } )
    }, [ category ] )

    return state; //el state es la { data:[], loading:true }
}
