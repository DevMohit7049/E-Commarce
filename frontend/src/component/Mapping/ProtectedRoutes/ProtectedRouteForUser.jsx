import React from 'react'
import {Navigate} from 'react-router';
const ProtectedRouteForUser = ({children}) => {

   const user = JSON.parse(localStorage.getItem('user'));
   if(user?.role==='user'){
    return children;
   }
   else{
     return <Navigate to={'/login'}/>
   }
}

export default ProtectedRouteForUser