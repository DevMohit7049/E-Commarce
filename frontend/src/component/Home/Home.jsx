import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Category from "../Category/Category";
import ProductCard from "../ProductCard/ProductCard";
import Track from "../Track/Track";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
const Home=()=>{

      return(
        <>
          <HeroSection/>
          <Category/>
          <ProductCard/>
          <Testimonial/>
          {/* <Track/> */}
          <Footer/>
        </>
      )
}
export default Home;