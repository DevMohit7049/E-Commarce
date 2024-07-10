import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart } from 'lucide-react';

const Navbar=()=>{


  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();
  
  const getData = useSelector((state)=>state.cartReducer.Cart_Data);
  

  // logout button //
  const logout=()=>{

     axios.get('http://localhost:8081/logout')
     .then((res)=>{

        navigate('/login')
        location.reload(true);
        localStorage.clear('user');
     })
     .catch((err)=>{
       console.log(err);
    })
     
  }

return(
<>    

<nav className="navbar navbar-expand-lg navbar-light sticky-top ">

  <div className="container-fluid">
    <Link className="navbar-brand" style={{textTransform:'uppercase', color:'#fff'}}>Urban-Haat</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={'/all_product'}>All Product</Link>
        </li>

        {
          !user?<li className="nav-item">
          <Link className="nav-link" to={'/signup'}>Signup</Link>
        </li>:''
        }
       
       {
          !user?<li className="nav-item">
          <Link className="nav-link" to={'/login'}>Login</Link>
        </li>:''
        }

        <li className="nav-item">
          <Link className="nav-link" to={'/cartpage'}>
            Cart({getData.length})</Link>
        </li>

        {
          user?.role==='user'&& <li className="nav-item">
          <Link className="nav-link" to={'/userdashboard'}>User</Link>
        </li>}
       
       {
         user?.role==="admin" &&  <li className="nav-item">
         <Link className="nav-link" to={'/admindashboard'}>Admin</Link>
       </li> }

       {user && <li className="cursor-pointer" onClick={logout}>
            <Link className="nav-link">Logout</Link>
        </li>}
      </ul>

      <SearchBar/>

    </div>
  </div>
</nav> 

 
  </>        
    )
}

export default Navbar