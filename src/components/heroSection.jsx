import React from "react";
import "../styles/herosection.css"
import Button from '@mui/material/Button';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import FortOutlinedIcon from '@mui/icons-material/FortOutlined';
import CabinSharpIcon from '@mui/icons-material/CabinSharp';
import DownhillSkiingSharpIcon from '@mui/icons-material/DownhillSkiingSharp';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';
import FenceSharpIcon from '@mui/icons-material/FenceSharp';
import AddHomeSharpIcon from '@mui/icons-material/AddHomeSharp';
import ForestSharpIcon from '@mui/icons-material/ForestSharp';
import HouseboatSharpIcon from '@mui/icons-material/HouseboatSharp';
import BlurOffSharpIcon from '@mui/icons-material/BlurOffSharp';

import IslandCarousel from "./bookingIsland/islandCarousel";
import { Link } from "react-router-dom";

function HeroSection(){
    return(
        <React.Fragment>
          <div className="hero-container"> 
            <div className="hero-icons">
                <div className="icon">
                  <LocalActivityOutlinedIcon />
                  <p>Icons</p>
                </div>
                <div className="icon">
                <Link to={"/islandimages"} className="cart-link">
                <button>
                    <HouseboatOutlinedIcon />
                    <p>Beachfront</p>
                    </button>
               </Link>
                    
                 
                </div>
                <div className="icon">
                 <FortOutlinedIcon />
                 <p>Amazing views</p>
                </div>
                <div className="icon">
                 <CabinSharpIcon />
                 <p>Countryside</p>
                </div>
                <div className="icon">
                 <DownhillSkiingSharpIcon />
                 <p>Skiing</p>
                </div>
                <div className="icon">
                 <ListAltSharpIcon />
                 <p>Containers</p>
                </div>
                <div className="icon">
                 <FenceSharpIcon />
                 <p>Farms</p>
                </div>
                <div className="icon">
                 <AddHomeSharpIcon />
                 <p>Tiny homes</p>
                </div>
                <div className="icon">
                 <ForestSharpIcon />
                 <p>OMG!</p>
                </div>
                <div className="icon">
                 <HouseboatSharpIcon />
                 <p>Mansions</p>
                </div>
                <div className="icon">
                 <BlurOffSharpIcon />
                 <p>Tree houses</p>
                </div>
                <div className="icon">
                 <FenceSharpIcon />
                 <p>Farms</p>
                </div>
                <div className="icon">
                 <BlurOffSharpIcon />
                 <p>Tree houses</p>
                </div>
                <div className="icon">
                 <AddHomeSharpIcon />
                 <p>Tiny homes</p>
                </div>
                <div className="icon">
                 <DownhillSkiingSharpIcon />
                 <p>Skiing</p>
                </div>
            </div>

            <div className="hero-images">
                    <div className="h-images">
                         <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1200&im_q=highq" alt="" />
                         <h3>Stay in Prince's Purple Rain house</h3>
                         <p>Hosted by Wendy and Lisa</p>
                         <h3>Coming September</h3>
                        
                    </div>
                    <div className="h-images">
                        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png?im_w=1200&im_q=highq" alt="" />
                        <h3>Join a living room session with Doja</h3>
                        <p>Hosted by Doja Cat</p>
                        <h3>Coming October</h3>
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1200&im_q=highq" alt="" />
                        <h3>Sleepover at Polly Pocket's Compact</h3>
                    <p>Hosted by Polly Pocket</p>
                    <h3>Sold Out</h3>
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq" alt="" />
                        <h3>Playdate at Pocket's Compact</h3>
                    <p>Hosted by Polly Pocket</p>
                    <h3>Sold Out</h3>
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg?im_w=1440&im_q=highq" alt="" />
                        <h3>Go VIP with Kevin Hart</h3>
                    <p>Hosted by Kevin Hart</p>
                    <h3>Sold Out</h3>
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=1440&im_q=highq" alt="" />
                        <h3>Train at the X- Manison</h3>
                    <p>Hosted by Jubilee</p>
                    <h3>Sold Out</h3>
                    </div>
             </div>

             

            <div className="lastSection">
                 <h1 id="ls-h">Past Experiences</h1>
                
              
            </div>

           


        </div>     

        </React.Fragment>
        
    )
}
export default HeroSection;