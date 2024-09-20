import React from "react";
import HeroSection from "../components/heroSection";
import Gallery from "../components/imageGallery";
import GetAways from "../components/getaways";


function Home() {
    return(
        <div>
            <HeroSection />
      
            <Gallery />
           <GetAways />
        </div>
    );
};

export default Home;