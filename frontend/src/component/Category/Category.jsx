import React from "react";
import { useNavigate } from "react-router-dom";

const Category=()=>{

    const category = [

        {
            image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
            name: 'Fashion'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
            name: 'Shirt'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
            name: 'Jacket'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
            name: 'Mobile'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
            name: 'Laptop'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
            name: 'Shoes'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
            name: 'Home'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
            name: 'Books'
        }
    ]

    const navigate = useNavigate();

    return(
        <>
           <div className="category-container">
                <div className="img-container">
                    {
                        category.map((item,index)=>{
                            const{name} = item
                            return(
                                <>
                                  <div className="item-container" key={index}
                                    onClick={()=>navigate(`/category/${name}`)}>
                                       <img src={item.image} alt={item.name}/>
                                       <p>{item.name}</p>
                                  </div>
                                </>
                            )
                        })
                    }
                  
                </div>

           </div>
        </>
    )
}
export default Category