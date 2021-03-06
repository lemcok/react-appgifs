import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); //para que no recargue en el submit

        if( inputValue.trim().length > 2 ){ //el el trim elimina los espacios en blanco
            setCategories( categories => [ inputValue, ...categories ] );
            setInputValue('');
        }


        console.log('submit hecho');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
