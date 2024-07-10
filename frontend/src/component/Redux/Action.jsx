import axios from 'axios';

// Fetch Product Data From Database //
export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const LoadProductData=()=>
{
    return async dispatch=>{
         try
         {
           const response = await axios.get('http://localhost:8081/productData');
           const productData = response.data;
           dispatch({
             type:LOAD_PRODUCT,
             payload:productData
           });

         }
         catch(err){
            alert('Product Loading Error');
         }
    }
}


// Add Product To The Cart //
export const LOAD_CART_DATA = 'LOAD_CART_DATA';
export const LoadCartData=(item)=>{
   
   return dispatch=>{

      dispatch({
           type:LOAD_CART_DATA,
           payload:item
      })
   }
}



// Delete Proudct From The Cart //
export const DELETE_CART_DATA = 'DELETE_CART_DATA';
export const DeleteCartData=(id)=>{

   return dispatch=>{
       dispatch({
         type:DELETE_CART_DATA,
         payload:id
       })
   }
}


// Increment Product Quanitity in Product Cart //

export const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
export const IncrementProduct=(id)=>{
    
   return dispatch=>{
      dispatch({
         type:INCREMENT_PRODUCT,
         payload:id
      })
   }
}


