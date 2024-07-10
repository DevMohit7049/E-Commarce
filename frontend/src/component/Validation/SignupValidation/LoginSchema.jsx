import * as Yup from 'yup';

export const LoginSchema = Yup.object({
   
    email:Yup.string().email('Please Enter Valid Email').required('Email Is Must'),

    password:Yup.string().required('Password Is Required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'password not match'),
    
    
});