import logoIcon from '../images/icon-above-font.svg';
import '../../scss/App.css';
import {NavLink} from 'react-router-dom';

function Header() {
    return(
        // <nav>
        //     <div>
        //         <img src={logoIcon} />
        //     </div>
        //     <ul classname="nav-links">
        //         <NavLink to="/forum">Forum</NavLink>
        //         <NavLink to="/account">Mon Compte</NavLink>
        //     </ul>
        // </nav>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" >
                <img src={logoIcon} />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active">
                  <NavLink to="/forum">Forum</NavLink>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                  <NavLink to="/account">Mon Compte</NavLink>
                  </a>
                </li>
              </ul>
              <span class="navbar-text">
                Groupomania
              </span>
            </div>
          </div>
        </nav>
    );
}

export default Header;
