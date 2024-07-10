import * as Yup from 'yup';

export const SignupSchema = Yup.object({
    name:Yup.string().min(5,' Name Is Too Short').max(15,' Name Is Too Long').required('Name Is Required'),

    email:Yup.string().email('Please Enter Valid Email').required('Email Is Must'),

    password:Yup.string().required('Password Is Required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Password is too weak please enter strong password"),

    contact:Yup.string().required('Contact Is Required').matches(/^[0-9]{1,10}$/ ,'Phone number must be between 1 and 10 digits'),
    // confirmPassword:Yup.string().required('Confirm Your Password')
    // .oneOf([Yup.ref('password'),null],'Both password should be match')
    
});
