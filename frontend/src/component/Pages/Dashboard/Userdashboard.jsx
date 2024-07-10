import React from "react";

const Userdashboard = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 07 LV8",
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
      href: "#",
      price: "₹61,999",
      color: "Orange",
      imageAlt: "Nike Air Force 1 07 LV8",
      quantity: 1,
    },
  ];

  const user = JSON.parse(localStorage.getItem('user'));

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
                <span style={{ fontWeight: "800" }}> Name:</span>
                {user?.name}
              </h1>
              <h1 className=" text-center">
                <span style={{ fontWeight: "800" }}> Email:</span>
                {user?.email}
              </h1>


              <h1 className=" text-center">
                <span style={{ fontWeight: "800" }}> Date:</span>
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

      <div className="bottem">
        <div className="user-dash-heading">
          <h1>Order Details</h1>
        </div>

        <div className="bottem-main">
          {products.map((item) => {
            return (
              <>
                <div className="left-main">
                  <div className="order-info">
                    <div style={{ fontWeight: "700" }}>Order Id</div>
                    <div style={{ fontSize: "15px" }}>12356</div>
                  </div>

                  <div className="order-info">
                    <div style={{ fontWeight: "700" }}>Date</div>
                    <div style={{ fontSize: "15px" }}>4 March,2024</div>
                  </div>

                  <div className="order-info">
                    <div style={{ fontWeight: "700" }}>Total Amount</div>
                    <div style={{ fontSize: "15px" }}>84,499</div>
                  </div>

                  <div className="order-info">
                    <div style={{ fontWeight: "700" }}>Order Status</div>
                    <div style={{ fontSize: "15px", color: "green" }}>
                      Confirm
                    </div>
                  </div>
                </div>

                <div className="center-main">
                  <div className="center-img">
                    <img
                      src={item.imageSrc}
                      alt=""
                      style={{ width: "100px" }}
                    />
                  </div>

                  <div className="center-item">
                    <p style={{ fontSize: "15px", fontWeight: "600" }}>
                      {item.name}
                    </p>
                    <p
                      style={{
                        marginTop: "-15px",
                        fontSize: "15px",
                        color: "grey",
                      }}
                    >
                      {item.color}
                    </p>
                    <p style={{ fontSize: "10px", color: "grey" }}>
                      X {item.quantity}
                    </p>
                  </div>
                </div>

                <div>
                  <p style={{marginTop:'10px',marginRight:'10px',fontWeight:'600'}}>{item.price}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
