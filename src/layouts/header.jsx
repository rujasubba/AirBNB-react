import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Icons } from "../assets";


import "../styles/layouts/header.css"
import StayExperience from "../components/stayExperienceTab";

function Header(){
    return(
            <div className="all-header">
              <div className="main-header">
                 <div className="logo">
                     <img src= {Icons.Logo} alt="logo" />
                 </div>
                 <StayExperience />
                {/* <div className="header-centre">
                <button class="tablinks" >Stays</button>
                <button class="tablinks" id="hfade">Experiences</button>
                </div> */}
                <div className="header-right">
                  
                    <h3>Airbnb your home</h3>
                    
                    <LanguageIcon />
                    <ExpandMoreIcon />
                    <div className="profile">
                     <MenuIcon />
                     <AccountCircleIcon />
                    </div>
                    
                   
                    
                  
                </div>
              </div>

              {/* <div className="sub-header">
                   <div className="h-sections">
                         <label>Where</label>
                         <input type="text" placeholder="Search destinations"/>
                    </div>
                    
                    <div className="h-sections">
                       <label>Check-in</label>
                       <input type="text" placeholder="Add dates"/>
                    </div>
                    <div className="h-sections">
                       <label>Check out</label>
                       <input type="text" placeholder="Add dates"/>
                    </div>
                    <div className="h-sections">
                       <label>Who</label>
                       <input type="text" placeholder="Add guests"/>
                    </div>
                    <div className="search">
                       <a><SearchIcon /></a>

                    </div>
                    
                   
              </div> */}
            </div>
          );
        }
        
        export default Header;