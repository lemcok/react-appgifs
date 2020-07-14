import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GridGif from './components/GridGif';

const App = () => {

    // const categories = [ 'One Punch', 'Dragon Bal', 'One Piece' ];
    const [categories, setCategories] = useState([ 'Minato']);

    

    return (
        <>
            <h2>App GifExpert</h2>
            <hr/>

            <AddCategory setCategories={ setCategories } />

            <ol>
                {
                    categories.map( (category) => (
                        <GridGif 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default App
