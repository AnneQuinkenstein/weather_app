import React from 'react';
import BounceLoader from "react-spinners/BounceLoader"

const Loading = ({ isLoading }) => {
    return (
        <div className="firstfade">
            <div className='current'>
                <div className="title loading">
                    <p className="loading">Weather >>  </p>
                    <div className="currentLoading">
                         <BounceLoader loading={isLoading}  size={300} color={'grey'} />
                    </div>
                </div>
                <h2 className="loading">coming soon</h2>
                <h1 className="margritte">Ceci n'est pas le temps.</h1>
            </div>
        </div>
    )
}

export default Loading;



