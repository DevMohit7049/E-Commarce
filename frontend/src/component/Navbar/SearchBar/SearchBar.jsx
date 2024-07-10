import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadProductData } from "../../Redux/Action";
import {useNavigate} from 'react-router'

const SearchBar = () => {
  const dispatch = useDispatch();

  const getAllProduct = useSelector(
    (state) => state.cartReducer.Load_Product_Data
  );

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filterSearchData = getAllProduct
    .filter((obj) => obj.product_title.toLowerCase().includes(search))
    .slice(0, 8);

  useEffect(() => {
    dispatch(LoadProductData());
  }, []);

  return (
    <>
      <div>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
    {search && 
    <div className="position-absolute bg-white w-50 w-md-50 w-lg-50  rounded-lg p-2">
        {filterSearchData.length > 0 ?
            <>
                {filterSearchData.map((item, index) => (
                    <div key={index} className="py-2 px-2 cursor-pointer" onClick={() => navigate(`/productinfo/${item.product_id}`)}>
                        <div className="d-flex align-items-center gap-2">
                            <img className="w-10" src={item.product_img} alt="" width={100} height={100}/>
                            {item.product_title}
                        </div>
                    </div>
                ))}
            </>
            : <p>No results found.</p>
        }
    </div>
    }
</div>

    </>
  );
};

export default SearchBar;
