import logo from '../components/images/icon.svg';
import '../App.css';
import {NavLink} from 'react-router-dom';

function Connection() {
  return (
    <div className="landingPage">
      <div className="landingPage-banner">
        <img src={logo} className="landingPage-logo" alt="logo" />
        <p>
          Bienvenu chez Groupomania!
        </p>
        <div className='signupBtn'>
          <NavLink to='/signup'>Signup</NavLink>
        </div>
        <div className='loginBtn'>
          <NavLink to='/login'>Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Connection;
