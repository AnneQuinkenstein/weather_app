import React, { useState, useEffect } from 'react';

const Search = (props) => {

    const [ text, setText ] = useState(); 
    const [ didMount, setDidMount ] = useState(false)
    const [ placeholder, setPlaceholder ] = useState(' ...')

    useEffect(() => {
      if (didMount) {
        setPlaceholder(''); 
      } else setDidMount(true)
    }, [text])

    const cityType = props.city.name + placeholder
 console.log(cityType);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(text);
        setText(''); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder={cityType} value={text} autoFocus/>
            {/* <input type='submit' value='Submit' /> */}
        </form>
    )
}

export default Search; 