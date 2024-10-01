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
                 <HouseboatOutlinedIcon />
                 <p>Beachfront</p>
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

            {/* <div className="banner">
                <div className="banner-info">
                    <h1>Discover the best rental properties anywher in the world</h1>
                    <h5>You are One Click away</h5>
                    <Button>Explore NearBy</Button>
                </div>
            </div> */}

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
                {/* <div className="ls-all">    
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/bc989f2d-eca8-4bcf-a9b0-b70b8e685a64.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Live like Bollywood star Janhvi Kapoor</h3>
                    <p>Hosted by Janhvi Kapoor</p>
                    <h3>Sold Out</h3>
                </div>
                <div>
                      <img id="im1"src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/ae3426d1-fba4-44d4-bed2-690426f25f7a.jpeg?im_w=1440&im_q=highq" alt="" />
                      <h3>Open the Olympic Games at Musée d’Orsay</h3>
                      <p>Hosted by mathieu Lehanneur</p>
                      <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=1440&im_q=highq" alt="" />
                    <h3>Wake up in the Musée d’Orsay</h3>
                    <p>Hosted by mathieu Lehanneur</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Make core memories with Inside Out 2</h3>
                    <p>Hosted by Joy</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Design your Incredibles Supersuit</h3>
                    <p>Hosted by Edna Mode</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/99417998-fa44-4c75-ae77-287c1468977b.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Go on tour with Feid</h3>
                    <p>Hosted by Feid</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/872f434b-9348-4ff1-8c6f-754fdbab4010.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Game with Khaby Lame</h3>
                    <p>Hosted by Khaby Lame</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b676fc8d-8250-4df0-a7cb-728b0486e371.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Crash at the X-Mansion</h3>
                    <p>Hosted by Jubilee</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/fb9dcb8d-7fa5-402f-91ae-fa2a26e9f097.png?im_w=1440&im_q=highq" alt="" />
                    <h3>Spend the night in the Ferrari Museum</h3>
                    <p>Hosted by  Marc Gené</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Drift off in the Up house</h3>
                    <p>Hosted by Carl Fredricksen</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/b16970cf-1d55-4edd-bb1f-e1735d0a228e.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Shrek’s Swamp</h3>
                    <p>Hosted by Donkey</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/d106e0ef-f825-4ff8-baf7-86256a54fbd5.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Barbie’s Malibu DreamHouse, Ken’s way</h3>
                    <p>Hosted by Ken</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/76f85a0c-b3e2-4f1d-9aa9-d7838f2393c6.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Greater London, United Kingdom</h3>
                    <p>Hosted by Mae</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/c67f78f1-5807-449a-9a88-753b7fa62d6a.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Houseplant Retreat</h3>
                    <p>Hosted by Seth Rogen</p>
                    <h3>Sold out</h3>
                </div>
                
                <div>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/365299e3-f926-47ee-bcbf-606d6a0370b9.jpeg?im_w=1440&im_q=highq" alt="" />
                    <h3>Home Alone Holiday</h3>
                    <p>Hosted by Buzz</p>
                    <h3>Sold out</h3>
                </div>
                <div>
                    <img src="https://a0.muscache.com/im/pictures/be0957a9-da56-47d6-89ca-223b6e75321a.jpg?im_w=1440&im_q=highq" alt="" />
                    <h3>The Last Blockbuster</h3>
                      <p>Hosted by Sandi</p>
                      <h3>Sold out</h3>
                </div> */}
              
            </div>

           


        </div>     

        </React.Fragment>
        
    )
}
export default HeroSection;