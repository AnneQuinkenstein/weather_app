import React from 'react';


const Title = (props) => {
    return (
        <>
            <div className="title"> 
            <p>Weather >>  </p> <p> {props.city.name}</p> </div>
        </>
    )
}

export default Title;
