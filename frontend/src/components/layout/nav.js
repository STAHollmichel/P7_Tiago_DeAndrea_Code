import logoIcon from '../images/icon-above-font.svg';
import '../../App.css';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

function Header() {

    const [token,setToken] = useState(null)

    const navigate = useNavigate()

    const logOut = () => {
      localStorage.clear();
      navigate ("/")
    }
    
    useEffect(() => {
      setToken(localStorage.token)
    }, [])

    if(!token) {
      navigate("/")
    };

  return(
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" >
              <NavLink to="/home">
              <img src={logoIcon} onClick={navigate}/>
              </NavLink>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active">
                <NavLink to="/home">Home</NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                <NavLink to="/account">Mon Compte</NavLink>
                </a>
              </li>
            </ul>
            <div class="navbar-disconnect">
              <button class="btn btn-danger" onClick={logOut}>Déconnexion</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
