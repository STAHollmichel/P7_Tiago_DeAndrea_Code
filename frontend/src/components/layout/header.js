import React from 'react';
import logoIcon from '../images/icon-above-font.svg';

function Banner() {
    const Header = (logoIcon) =>{
        console.log("Banner");
    };
    return (
        <nav className='banner'>
            <div>
                <img src={logoIcon} className="banner" alt="logoIcon" />
            </div>
        </nav>
    );
}

export default Banner;
