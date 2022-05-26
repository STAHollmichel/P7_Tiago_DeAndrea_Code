import '../App.css';
import LogInForm from '../components/LogInForm';

function login() {
    return(
        <div class="container-sm col-9">
            <h1>Bienvenue! Connectez-vouz chez Groupo Mania</h1>
            <LogInForm />
        </div>
    );
}

export default login;