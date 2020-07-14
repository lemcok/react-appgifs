import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
import ItemGridGif from './ItemGridGif';

const GridGif = ( { category } ) => {

    const { data:images, loading } = useFechGifs( category );
    
    // useEffect( () => { //el useEffect ejecuta el codigo dentro una unica vez cuando el componente es renderizado por primera ves
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ])  

    return (
            <>
                <h3 className="animate__animated animate__fadeIn">{ category }</h3>
                { loading && <p className="animate__animated animate__flash">Loading...</p> }
                <div className="card-grid">
                    {
                        images.map( img => (
                            <ItemGridGif
                                key={ img.id } 
                                { ...img }
                            />
                        ))
                    }
                </div>
            </>
    )
}

export default GridGif
