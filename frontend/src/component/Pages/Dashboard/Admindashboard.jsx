import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../Admin/ProductDetail";
import OrderDetail from "../Admin/OrderDetail";
import UserDetail from "../Admin/UserDetail";
import { useSelector } from "react-redux";

const Admindashboard = () => {


  const user = JSON.parse(localStorage.getItem('user'));
  const { Load_Product_Data } = useSelector((state) => state.cartReducer);
  const productLength = Load_Product_Data.length;

// Date Formation //

// Array of month names
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const dateWithTimeStamp = user.date;
const newDate = new Date(dateWithTimeStamp);


// Get the month, day, and year
const month = monthNames[newDate.getMonth()];
const day = newDate.getDate();
const year = newDate.getFullYear();

const formattedDate = `${month} ${day},${year}`;


  return (
    <>
      <div
        className="container-fluid mt-2"
        style={{ backgroundColor: "rgb(252, 228, 232)"}}
      >
        <div className="row">
          <div className="col text-center py-4">
            <h3>Admin Dashboard</h3>
          </div>
        </div>
      </div>

      <div className="main-container">
        {/* Top  */}
        <div className="top ">
          {/* main  */}
          <div className="user-item">
            {/* image  */}
            <div className="user-img">
              <img
                src="https://cdn.pixabay.com/photo/2019/05/01/12/30/rishi-gangoly-4170752_640.jpg"
                alt=""
              />
            </div>
            {/* text  */}
            <div className="user-info">
              <h1 className=" text-center">
                <span style={{ fontWeight: "800" }}>Name:</span>
                {user?.name}
              </h1>
              <h1 className=" text-center">
                <span style={{ fontWeight: "800" }}>Email:</span>
                {user?.email}
              </h1>

              <h1 className=" text-center">
                <span style={{ fontWeight: "800" }}>Date:</span>
                {formattedDate}
              </h1>

              <h1 className=" text-center">
                <span style={{ fontWeight: "800" }}>Role:</span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>
      </div>

 


      <Tabs
        className="container d-flex justify-content-center flex-column"
        style={{ minHeight: "60vh"}}
      >
        <TabList
          style={{ listStyle: "none", width: "100%", gap: "30px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Tab className="col d-flex flex-column justify-content-center align-items-center col-container" style={{cursor:'pointer'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-basket"
            >
              <path d="m5 11 4-7" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
              <path d="m9 11 1 9" />
              <path d="M4.5 15.5h15" />
              <path d="m15 11-1 9" />
            </svg>
            <h2>{productLength}</h2>
            <p>Total Products</p>
          </Tab>

          <Tab className="col d-flex flex-column justify-content-center align-items-center col-container" style={{cursor:'pointer'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list-ordered"
            >
              <line x1={10} x2={21} y1={6} y2={6} />
              <line x1={10} x2={21} y1={12} y2={12} />
              <line x1={10} x2={21} y1={18} y2={18} />
              <path d="M4 6h1v4" />
              <path d="M4 10h2" />
              <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
            </svg>
            <h2>10</h2>
            <p>Total Order</p>
          </Tab>

          <Tab className="col d-flex flex-column justify-content-center align-items-center col-container" style={{cursor:'pointer'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h2>10</h2>
            <p>Total User</p>
          </Tab>
        </TabList>

        <TabPanel>
          <ProductDetail/>
        </TabPanel>

        <TabPanel>
           <OrderDetail/>
        </TabPanel>


        <TabPanel>
           <UserDetail/>
        </TabPanel>
      </Tabs> 

    </>
  );
};
export default Admindashboard;
