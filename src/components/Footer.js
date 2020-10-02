import React from 'react';
import { DiReact } from "react-icons/di";


const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/AnneQuinkenstein" className="link">
                coded with <span role="img" aria-labelledby="coffee"><DiReact className='footerIcon'/></span> by Anne Quinkenstein
            </a>
        </footer>
    )
}

export default Footer; 