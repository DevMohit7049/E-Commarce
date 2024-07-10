import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Category from "../Category/Category";
import ProductInfo from "../Pages/ProductInfo/ProductInfo";
import ScrollTop from "../ScrollTop/ScrollTop";
import CartPage from "../Pages/Cart/CartPage";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Signup from "../Pages/Registration/Signup";
import Login from "../Pages/Registration/Login";
import Userdashboard from "../Pages/Dashboard/Userdashboard";
import Admindashboard from "../Pages/Dashboard/Admindashboard";
import AddProductPage from "../Pages/Admin/AddProductPage";
import UpdateProductPage from "../Pages/Admin/UpdateProductPage";
import ProtectedRouteForUser from "./ProtectedRoutes/ProtectedRouteForUser";
import ProtectedRouteForAdmin from "./ProtectedRoutes/ProtectedRouteForAdmin";
import {Provider} from 'react-redux';
import store from "../Redux/Store";
import CategoryPage from "../Pages/categoryPage/CategoryPage";

const Mapping = () => {
  return (
    <>
     <Provider store={store}>
      <BrowserRouter>
      
        <ScrollTop/>
         <Navbar/>
         <Routes>
              <Route>
                <Route path="/" element={<Home/>}/>
                <Route path="/productInfo/:id" element={<ProductInfo/>}/>
                <Route path="/cartpage" element={<CartPage/>}/>
                <Route path="/all_product" element={<AllProduct/>}/>
                
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                
                <Route path="/category/:categoryname" element={<CategoryPage/>}/>

                <Route path="/userdashboard" element={
                  <ProtectedRouteForUser>
                      <Userdashboard/>
                  </ProtectedRouteForUser> }/>



                <Route path="/admindashboard" element={
                    <ProtectedRouteForAdmin>
                       <Admindashboard/>
                    </ProtectedRouteForAdmin>}/>

                <Route path="/AddProductPage" element={
                   <ProtectedRouteForAdmin>
                       <AddProductPage/>
                   </ProtectedRouteForAdmin>
                  }/>


                <Route path="/UpdateProductPage/:id" element={
                   <ProtectedRouteForAdmin>
                      <UpdateProductPage/>
                   </ProtectedRouteForAdmin>}/>
                {/* <Route path="/category" element={<Category/>}/> */}
              </Route>
         </Routes>
      </BrowserRouter>
  </Provider>
    </>
  );
};
export default Mapping;
