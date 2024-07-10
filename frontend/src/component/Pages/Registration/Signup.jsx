import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../Validation/SignupValidation/SignupSchema";
import { signupInit } from "../../InitFiles/Registration/SignupInit";
import axios from 'axios';
import shortId from 'shortid';

const Signup = ()=>{

    const [signup,setSignup]=useState(signupInit);
    const navigate = useNavigate();
    
    const handleChange=(e)=>{

         const {name,value} = e.target;
         setSignup({...signup,[name]:value});
    }

    const onSubmit=()=>{
        
        signup.id = shortId.generate();
        axios.post('http://localhost:8081/signup',signup)
        .then((res)=>{
                
                alert('Account Created Successfully');
                navigate('/login');
                
        }).catch((err)=>{
            
            console.log(err);
        })

    }

   const{register,
    handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(SignupSchema)
   });

   const {name,email,contact,password} = signup;

    return(
    <>
    <div class="body-background">
    
    <form class="container-fluid d-flex justify-content-center align-items-center h-100"
     onSubmit={handleSubmit(onSubmit)}>  
       <div class="card p-3 text-center py-4" style={{width:'400px',height:'auto'}}>
          <h4>Create account</h4>
          <div>
              <span>Already have an account?</span>
              <Link to={'/login'} className="text-decoration-none">Signin</Link>
          </div>
          
          <div class="mt-3 px-3">
              <input type="text" 
              {...register('name')}
              value={name || ''}
              onChange={handleChange}
              className="form-control" 
              placeholder="Name"/>
             <p style={{ color: "#ff0000" }}>{errors.name && errors.name?.message}</p>
          </div>
          
           
          <div class="mt-3 px-3">
              <input
               type="email" 
              {...register('email')}
              value={email || ''}
              onChange={handleChange}
              className="form-control" 
              placeholder="E-mail"/>
               <p style={{ color: "#ff0000" }}>{errors.email?.message}</p>
          </div>
          

          <div class="mt-3 px-3">
              <input 
               type="password"
               {...register('password')}
               value={password || ''}
               onChange={handleChange}
               className="form-control" 
               placeholder="Password"/>
                <p style={{ color: "#ff0000" }}>{errors.password?.message}</p>
          </div>


          <div class="mt-3 px-3">
              <input 
               type="text" 
               {...register('contact')}
               value={contact || ''}
               onChange={handleChange}
               className="form-control"
               placeholder="Contact"/>
              <p style={{ color: "#ff0000" }}>{errors.contact?.message}</p>
          </div>

          <div class="mt-3 d-grid px-3">
              <button className="btn btn-primary btn-block btn-signup text-uppercase">
                  <span>Signup</span>
              </button>
          </div>
          
          <div class="px-3">
              <div className="mt-2 form-check d-flex flex-row">
              <input className="form-check-input" type="checkbox" value="" id="services"/>
              <label className="form-check-label ms-2" for="services">
                I have read and agree to the terms.
              </label>
            </div>
          </div>
      </div>
       
   </form> 
    </div>
</>
    )
}
export default Signup;