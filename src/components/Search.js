import React, { useState } from 'react';

const Search = (props) => {

    const [ text, setText ] = useState(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <input type='submit' value='Submit' />
        </form>
    )
}

export default Search; 