import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";


function LogInForm() {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
  
        axios
            .post("http://localhost:3000/api/auth/login", {
                email: data.email,
                password: data.password,
            })
            .then((result) => {
                navigate("/forum");
            })
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label for="InputEmail1" class="form-label">E-mail:</label>
                <input {...register("email")} type="email" class="form-control" id="InputEmail1" />
            </div>
            <div class="mb-3">
                <label for="InputPassword1" class="form-label">Password:</label>
                <input {...register("password")} type="password" class="form-control" id="InputPassword1" />
            </div>
            <button type="submit" value="Submit" class="btn btn-primary">Connecter</button>
        </form>
        );
    }

export default LogInForm;



