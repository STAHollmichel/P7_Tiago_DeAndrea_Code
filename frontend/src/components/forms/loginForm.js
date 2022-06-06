import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink} from "react-router-dom";


function LoginForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
  
        axios
            .post("http://localhost:3000/api/auth/login", {
                email: data.email,
                password: data.password,
            })
            .then((result) => {
                localStorage.token = result.data.token;
                axios.defaults.headers.common.Authorization = 'Bearer ' + result.data.token;
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='form-signin'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-floating'>
                    <label for="floatingInput" className="form-label">Adresse e-mail</label>
                    <input {...register('email', { required: true })} type="email" className="form-control bg-light" id="floatingInput" placeholder="nom@example.fr"/>
                    {errors.email && "L'e-mail est requis"}
                </div>
                <div className='form-floating'>
                    <label for="floatingPassword" className="form-label">Mot de passe</label>
                    <input {...register('password', { required: true, minLength: 4 })} type="password" className="form-control bg-light" id="floatingPassword" placeholder="Mot de passe"/>
                    {errors.password && "le mot de passe est requis"}
                </div>
                <button type="submit" value="Submit" className="w-100 btn btn-lg btn-primary">Se connecter</button>
                <div className='container my-3' id='login_reg_seperator'>
                     <span id='login_reg_bars'>Ou</span>
                </div>
                <NavLink to='/signup'><button className='w-100 btn btn-lg btn-danger'>S'inscrire</button></NavLink>
            </form>
        </div>
    );
}

export default LoginForm;



