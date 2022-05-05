import logoIcon from '../images/icon-above-font.svg';
import '../../App.css';
import {NavLink} from 'react-router-dom';

function Header() {
    return(
        <nav>
            <div>
                <img src={logoIcon} />
            </div>
            <ul classname="nav-links">
                <NavLink to="/forum">Forum</NavLink>
                <NavLink to="/account">Mon Compte</NavLink>
            </ul>
        </nav>
    );
}

export default Header;