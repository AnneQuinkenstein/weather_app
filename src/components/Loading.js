import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";


const Loading = ({ isLoading }) => {
    return (
    <BounceLoader loading={isLoading}  size={700} color={'orange'} />
    )
}

export default Loading;