import '../scss/App.css';
import SignUpForm from '../components/SignUpForm';

function Signup() {
    return(
        <div class="container-sm col-9">
            <h1>Bienvenue! Inscrivez-vouz chez Groupo Mania</h1>
        <SignUpForm />
        </div>
    );
}

export default Signup;