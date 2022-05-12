import axios from "axios";
import { useForm } from "react-hook-form";


function LogInForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
  
        axios
            .post("http://localhost:3000/api/auth/login", data)
            .then(
                (result) => {
                console.log(result);
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



