import React from 'react';
import Search from './Search';


const Title = (props) => {
    return (
        <>
            <div className="title"> 
            <p>Weather >>  </p> 
            <Search {...props} onSearch={props.onSearch} />
            </div>
        </>
    )
}

export default Title;
