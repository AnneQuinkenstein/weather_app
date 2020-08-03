import React, { useState } from 'react';

const Search = (props) => {

    const [ text, setText ] = useState(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(text);
        setText(''); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder={props.city.name} value={text} autoFocus/>
            {/* <input type='submit' value='Submit' /> */}
        </form>
    )
}

export default Search; 