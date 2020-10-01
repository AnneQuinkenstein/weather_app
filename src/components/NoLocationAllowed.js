import React, { useState } from 'react';

const NoLocationAllowed = (props) => {

    const [ text, setText ] = useState(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(text);
        setText(''); 
        props.setErrorStateFalse(); 
    }

    return (
        <div>
            <form className='errorForm'onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setText(e.target.value)} placeholder='Please type a City or ...' value={text} autoFocus />
            </form>
            <div className='error'><h1> &nbsp;stay&nbsp;inside</h1></div>
        </div>
    )

}

export default NoLocationAllowed;