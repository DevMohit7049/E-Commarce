import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '../../Validation/SignupValidation/LoginSchema';
import axios from 'axios';
import { LoginInit } from '../../InitFiles/Registration/LoginInit';
import toast from 'react-hot-toast';

const Login = () => {

       const navigate = useNavigate();
       const [email,setEmail] = useState('');
       const [password,setPassword] = useState('');

   const onSubmit=()=>{

      axios.defaults.withCredentials = true;
      axios.post('http://localhost:8081/login',{email,password})
      .then((res)=>{

         const user = res.data;
         localStorage.setItem('user',JSON.stringify(user));
         if(res.data.Status==='Success' && user.role==='user'){
            
            navigate('/userdashboard');
         }
         else if(res.data.Status==='Success' && user.role==='admin'){
           
            navigate('/admindashboard')
         }
         else{
             alert('No Record Exist');
         }
         
      }).catch((err)=>{

         console.log(err);
      })
   }

  

   const{register,
    handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(LoginSchema)
   });


  return (

    <>
    <div className="body-background">
    <form className="container-fluid d-flex justify-content-center align-items-center h-100"
     onSubmit={handleSubmit(onSubmit)}>  
       <div className="card p-3 text-center py-4" style={{width:'400px'}}>
          <h4>Signup into your account</h4>
          <div>
              <span>Don't have an account?</span>
              <Link to={'/signup'} className="text-decoration-none">Register</Link>
          </div>
          
          <div className="mt-3 px-3">
              <input 
                type='email' 
                {...register('email')}
                value={email || ''}
                onChange={(e)=>setEmail(e.target.value)}
                // onChange={handleChange}
                className="form-control" 
                placeholder="E-mail"/>
                <p style={{ color: "#ff0000" }}>{errors.email && errors.email?.message}</p>
          </div>
          
          <div className="mt-3 px-3">
              <input 
               type='password' 
               {...register('password')}
               value={password || ''}
               onChange={(e)=>setPassword(e.target.value)}
            //    onChange={handleChange}
               className="form-control" 
               placeholder="password"/>
                 <p style={{ color: "#ff0000" }}>{errors.password && errors.password?.message}</p>
          </div>

          <div className="mt-3 d-grid px-3">
              <button className="btn btn-primary btn-block btn-signup text-uppercase">
                  <span>Login</span>
              </button>
          </div>

          <div className='mt-3'>
              <Link to={'/resetpassowrd'} className="text-decoration-none">Forgot Password</Link>
          </div>
          
      </div>
       
   </form> 
    </div>
    </>
  )
}

export default Login