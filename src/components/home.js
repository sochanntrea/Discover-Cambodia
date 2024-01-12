import React from "react";
import Header from "../reusable/header";
import Footer from "../reusable/footer";
import HeroSection from "./hero";
import BodySection from "./body";
// import Body from "./body";

function Home (){
    return (
        <div>
           <Header />
           <HeroSection />
           <BodySection />
           {/* <Body /> */}
           <Footer />
        </div>
    );
}

export default Home;