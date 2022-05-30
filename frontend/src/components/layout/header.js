import logoIcon from '../images/icon-above-font.svg';
import '../../App.css';
import { NavLink, useNavigate} from 'react-router-dom';
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
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand" >
              <NavLink to="/home">
              <img src={logoIcon} onClick={navigate} alt='Groupomania navLogo'/>
              </NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/account_profile">Mon Profile</NavLink>
              </li>
            </ul>
            <div className="navbar-disconnect me-2">
              <button className="btn btn-danger" onClick={logOut}>Déconnexion</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
