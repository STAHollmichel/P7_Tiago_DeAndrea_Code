import axios from "axios";
import { useForm } from "react-hook-form";

function SignUpForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/api/auth/signup", data)
      .then( 
        (result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-3">
        <label for="InputFirstName" class="form-label">Prénom:</label>
        <input {...register("firstName")} type="text" class="form-control" id="FirstName"/>
      </div>
      <div class="mb-3">
        <label for="InputLastName1" class="form-label">Nom:</label>
        <input {...register("lastName")} type="text" class="form-control" id="InputLastName"/>
      </div>
      <div class="mb-3">
        <label for="InputAge1" class="form-label">Age</label>
        <input {...register("age")} type="text" class="form-control" id="InputAge1"/>
      </div>
      <div class="mb-3">
        <label for="InputOcupation1" class="form-label">Ocupation</label>
        <input {...register("profession")} type="text" class="form-control" id="InputOcupation1"/>
      </div>
      <div class="mb-3">
        <label for="InputBio1" class="form-label">Bio</label>
        <textarea {...register("bio")} class="form-control" id="InputBio1"/>
      </div>
      <div class="mb-3">
        <label for="InputEmail1" class="form-label">E-mail:</label>
        <input {...register("email")} type="email" class="form-control" id="InputEmail1"/>
      </div>
      <div class="mb-3">
        <label for="InputPassword1" class="form-label">Password:</label>
        <input {...register("password")} type="Password" class="form-control" id="InputPassword1"/>
      </div>
      <button type="submit" value="Submit" class="btn btn-primary">Enregistrer</button>
    </form>
  );
}

export default SignUpForm;