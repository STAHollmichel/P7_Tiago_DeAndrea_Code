import axios from 'axios';
import { useForm } from 'react-hook-form';
 
function SignUpFormModify(props) {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => { 
      window.alert("Profile modifié!");
      console.log(data);
      axios
          .put("http://localhost:3000/api/auth/" + props.auth, data)
          .then(
              (result) => {
              window.location.reload();
           })
          .catch((err) => console.log(err));
  }

  if (props.modify) {

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label for='InputFirstName' className='form-label'>Prénom:</label>
          <input {...register('firstName')} type='text' className='form-control' id='FirstName'/>
        </div>
        <div className='mb-3'>
          <label for='InputLastName1' className='form-label'>Nom:</label>
          <input {...register('lastName')} type='text' className='form-control' id='InputLastName'/>
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
          <label for='InputEmail1' className='form-label'>E-mail:</label>
          <input {...register('email')} type='email' className='form-control' id='InputEmail1'/>
        </div>
        <div className='mb-3'>
          <label for='InputPassword1' className='form-label'>Password:</label>
          <input {...register('password')} type='Password' className='form-control' id='InputPassword1'/>
        </div>
        <button type='submit' value='Submit' className='btn btn-primary'>Enregistrer</button>
      </form>
    );
  }
  return null;
}
export default SignUpFormModify;