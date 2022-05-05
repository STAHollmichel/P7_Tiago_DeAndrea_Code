import React from 'react';
import '../../App.css';

function Header() {
    return(
        <nav>
            <div>
                <img src={logoIcon} />
            </div>
            <ul classname="nav-links">
                <Link to="/forum">
                    <li>Forum</li>
                </Link>
                <Link to="/account">
                    <li>Mon Compte</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Header;