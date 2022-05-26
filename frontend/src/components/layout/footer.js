import '../../App.css';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className='container-fluid bg-dark'>
            <div className='container text-center text-white mb-3'>
                <section class="pt-4 mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab', 'facebook']} /> 
                    </a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />    
                    </a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab', 'google']} />
                    </a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </section>
                <section className='text-center' >
                    <ul className='list-unstyled mb-0 d-flex flex-column'>
                        <NavLink to="/home">Accueil</NavLink>
                        <NavLink to="/account">Mon Compte</NavLink>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;


