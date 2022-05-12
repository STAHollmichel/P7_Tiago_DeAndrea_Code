import '../../scss/App.css';
import {NavLink} from 'react-router-dom';

function Footer() {
    return (
        <div class="bg-dark text-center text-white mb-3">
            <ul classname="nav-links">
                <NavLink to="/forum">Forum</NavLink>
                <NavLink to="/account">Mon Compte</NavLink>
            </ul>
        </div>
    );
}

export default Footer;


