// ====server file===//

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const salt = 10;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
   origin:['http://localhost:5173'],
   methods:['POST','GET','PUT','DELETE'],
   credentials:true
}));



const PORT = 8081 ;
dotenv.config({path:'./.env'});

//=======Database-Connection With Env Protection========//
const db = mysql.createConnection({
    
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
 
})


// ===Secret key===//
const secretKey = process.env.SECRET_KEY;

// ====Checking Connection=====//
db.connect((err)=>{
  
      if(err){
        console.log(err);
      }
      else{
         console.log('Database Connected Successfully');
      }
});


// =====Verify The User======//
const verifyUser = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token){
      return res.json({Error:'You are not authenticated'});
  }
  else{
       jwt.verify(token,secretKey,(err,decoded)=>{
           if(err){
               return res.json({Error:'Token is not ok'});
           }
           else{
              req.name = decoded.name;
              next();
           }
       })
  }
}


app.get('/',verifyUser,(req,res)=>{
   return res.json({Status:'Success',name:req.name});
})



//=====Signup Api======//
app.post('/signup',(req,res)=>{

   const date = new Date().toISOString().split('T')[0];
   const time = new Date().toISOString().split('T')[1].split('.')[0];
   const sql = "INSERT INTO user_detail (`id`, `name`, `email`, `password`, `date`,`time`,`contact`) VALUES (?,?,?,?,?,?,?)";

  //  Encrypt Password //
  bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
     if(err){
       return res.json({Error:'Error to hashing password'});

     }
     const values=[req.body.id,
                   req.body.name,
                   req.body.email,
                   hash,
                   date,
                   time,
                   req.body.contact]

        db.query(sql,values,(err,data)=>{
           if(err){
             return res.json(err);

           }
           else{
             return res.json(data);

           }
        })
  })
})



//=====Login Api=======//
app.post('/login',(req,res)=>{
  
    const sql = 'SELECT * FROM user_detail WHERE email=?';
    const email = [req.body.email];

    db.query(sql,email,(err,data)=>{
         if(err){
           res.json({Error:'Login Error In Server'});
         }

         if(data.length > 0){
            bcrypt.compare(req.body.password.toString(),data[0].password,(bcryptErr,bcryptRes)=>{
                
                if(bcryptErr){
                   return res.json({Error:'Password Is Not Correct'});
                }
                 if(bcryptRes){
                 
                   const name = data[0].name;
                   const role = data[0].role;
                   const date = data[0].date;
                   const email = data[0].email;
                  //  Token Generation //
                  const token = jwt.sign({name,role},secretKey,{expiresIn:'1d'});
                  res.cookie('token',token);
                  return res.json({Status:'Success',role:role,date:date,name:name,email:email});
                }
                else{
                  return res.json({Error:'Password Does Not Match'});
                }
            });
         }
         else{
           return res.json({Error:'No User Exist'});
         }
    })
})



//=======Logout Api======//
app.get('/logout',(req,res)=>{

  res.clearCookie('token');
  return res.json({Status:'Success'})
});


//======Add Product Api========//
app.post('/addproduct',(req,res)=>{

  const date = new Date().toISOString().split('T')[0];
  const time = new Date().toISOString().split('T')[1].split('.')[0];
  const quantity = 1;
  const sql = 'INSERT INTO product (`product_id`,`product_category`,`product_title`,`product_price`,`product_img`,`product_discription`,`date`,`time`,`quantity`) VALUES (?,?,?,?,?,?,?,?,?)';

   const values = [req.body.product_id,
                   req.body.product_category,
                   req.body.product_title,
                   req.body.product_price,
                   req.body.product_img,
                   req.body.product_discription,
                   date,
                   time,
                   quantity
                  ];

 db.query(sql,values,(err,data)=>{

   if(err){
      return res.json(err);
   }
   else{
    return res.json(data);
   }
 });

})

//========Get Product=======//
app.get('/productData',(req,res)=>{
     
   const sql = 'SELECT * FROM  product';

   db.query(sql,(err,data)=>{
       if(err)
       {
         res.json(err);
       }
       else{
         res.json(data);
       }
   })
})


//=========Update Product Api========//
app.put('/update/:id',(req,res)=>
{
  const product_id=req.params.id;
  const date = new Date().toISOString().split('T')[0];
  const time = new Date().toISOString().split('T')[1].split('.')[0];
  const quantity = 1;
  const values = [
    
    req.body.product_category,
    req.body.product_title,
    req.body.product_price,
    req.body.product_img,
    req.body.product_discription,
    date,
    time,
    quantity,
    product_id,
  ];
  const sql = 'UPDATE product SET `product_category`=?, `product_title`=?, `product_price`=?, `product_img`=?, `product_discription`=?, `date`=?, `time`=?, `quantity`=? WHERE product_id=?'; 

  db.query(sql,values,(err,data)=>{

          if(err) 
          {
            return res.json({Message:"Error While Updating Recourd"});
          }
          else{
            return res.json(data);
          }
  })
  
})


// ========Delete Proudt Api=========//
app.delete('/DeleteProduct/:id',(req,res)=>{
    
     const productId = req.params.id;
     const sql = 'DELETE FROM product WHERE `product_id` = ?';
     db.query(sql,productId,(err,data)=>{
        
         if(err)
         {
            return res.status(500).json({err:'Error In Deleting Product'});
         }
         else{
           return res.json(data);
         }
     });
});

//========Listing Db======//
app.listen(PORT,()=>{
    console.log('db listening on port = ',PORT);
})