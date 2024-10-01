import React, {useState} from "react";

import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Icons } from "../assets";


import "../styles/layouts/header.css"


function Header(){

   const [activeTab, setActiveTab] = useState('Stays');

   const stayExperience = {
          Stays: [
              { label: "Where", type: "Search destinations" },
              { label: "Check in", type: "Add dates" },
              {label:"Check out", type:"Add dates"},
              {label:"Who", type:"Add guests"}
            ],
          Experience: [
              { label: "Where", type: "Search destinations" },
              { label: "Date", type: "Add dates" },
              { label: "Who", type: "Add guests" }
            ]
          };



    return(
            <div className="all-header">
              <div className="main-header">
                 <div className="logo">
                     <Link to={"/"}>
                     <img src= {Icons.Logo} alt="logo" />

                     </Link>
                 </div>
                
                 {/* <div className="header-centre">
                <button class="tablinks" >Stays</button>
                <button class="tablinks" id="hfade">Experiences</button>
                </div> */}


                <div className="header-centre">
          <button
            className={`tablinks ${activeTab === 'Stays' ? 'active' : ''}`}
            onClick={() => setActiveTab('Stays')}
          >
            Stays
          </button>
          <button
            className={`tablinks ${activeTab === 'Experience' ? 'active' : ''}`}
            id="hfade"
            onClick={() => setActiveTab('Experience')}
          >
            Experiences
          </button>
        </div> 




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
                    </div> */}



                    <div className="sub-header">
        {activeTab === 'Stays' && (
          <>
            {stayExperience.Stays.map((item, index) => (
              <div className="h-sections" key={index}>
                <label>{item.label}</label>
                <input type="text" placeholder={item.type} />
              </div>
            ))}
          </>
        )}
        {activeTab === 'Experience' && (
          <>
            {stayExperience.Experience.map((item, index) => (
              <div className="h-sections" key={index}>
                <label>{item.label}</label>
                <input type="text" placeholder={item.type} />
              </div>
            ))}
          </>
        )}
                    <div className="search">
                       <a><SearchIcon /></a>

                    </div>
                    
                   
              </div>
            </div>
          );
        }
        
        export default Header;