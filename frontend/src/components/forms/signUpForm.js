import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate} from 'react-router-dom';
 
function SignUpForm() {

  const { register, formState: { errors }, handleSubmit } = useForm();


  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/api/auth/signup", data)
      .then((result) => {
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
     })
     .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='container py-4 col-lg-5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label for='InputFirstName' className='form-label'>Prénom: *</label>
          <input {...register('firstName', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} type='text' className='form-control' id='FirstName'/>
          {errors.firstName && "Le prénom est requis"}
        </div>
        <div className='mb-3'>
          <label for='InputLastName1' className='form-label'>Nom: *</label>
          <input {...register('lastName', { required: true, maxLength: 20, patttern: /^[A-Za-z]+$/i })} type='text' className='form-control' id='InputLastName'/>
          {errors.lastName && "Le nom de famille est requis"}
        </div>
        <div className='mb-3'>
          <label for='InputAge1' className='form-label'>Age</label>
          <input {...register('age')} type='text' className='form-control' id='InputAge1'/>
        </div>
        <div className='mb-3'>
          <label for='InputOcupation1' className='form-label'>Ocupation</label>
          <input {...register('profession')} type='text' className='form-control' id='InputOcupation1'/>
        </div>
        <div className='mb-3'>
          <label for='InputBio1' className='form-label'>Bio</label>
          <textarea {...register('bio')} className='form-control' id='InputBio1'/>
        </div>
        <div className='mb-3'>
          <label for='InputEmail1' className='form-label'>E-mail: *</label>
          <input {...register('email', { required: true })} type='email' className='form-control' id='InputEmail1'/>
          {errors.email && "L'e-mail est requis"}
        </div>
        <div className='mb-3'>
          <label for='InputPassword1' className='form-label'>Password: *</label>
          <input {...register('password', { required: true, minLength: 4 })} type='Password' className='form-control' id='InputPassword1'/>
          {errors.password && "le mot de passe est requis"}
        </div>
        <button type='submit' value='Submit' className='btn btn-primary'>Enregistrer</button>
      </form>
    </div>
  );
}

export default SignUpForm;