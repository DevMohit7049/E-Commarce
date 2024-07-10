import React from "react";

const Testimonial = () => {

  return (

      <section className="testimonial-container">
         <div className="testimonial-headings">
             <h2>Testimonial</h2>
              <h3>What Our <span style={{color:'#e91e63',fontWeight:'bold'}}>Customers</span> Are Saying</h3>
         </div>

           <div className="main-box">

            <div className="card-box">
              <img src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est vel quaerat maiores molestiae nobis ipsam? Ducimus enim distinctio.</p>
              <h5>Mohit Tomar</h5>
              <h6>Senior Product Designer</h6>
            </div>

            <div className="card-box">
              <img src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est vel quaerat maiores molestiae nobis ipsam? Ducimus enim distinctio.</p>
              <h5>Jatin Kumar</h5>
              <h6>Senior Developer</h6>
            </div>


            <div className="card-box">
              <img src="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est vel quaerat maiores molestiae nobis ipsam? Ducimus enim distinctio.</p>
              <h5>Akshay</h5>
              <h6>Product Manager</h6>
            </div>

           </div>
      </section>
  )
}

export default Testimonial