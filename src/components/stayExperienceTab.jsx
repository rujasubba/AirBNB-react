import React, {useState} from "react";

import "../styles/stayExperience.css"

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

function StayExperience() {
        const [activeTab, setActiveTab] = useState("Stays");
      
        const handleTabClick = (tabName) => {
          setActiveTab(tabName);
        };
    return(
        <div className="tab-container">
             <ul className="se-tab-menu">
                 {Object.keys(stayExperience).map((tab) => (
                 <li
                  key={tab}
                  className={`tab-item ${activeTab === tab ? "active" : ""}`}
                 onClick={() => handleTabClick(tab)}
                 >
                {tab}
             </li>
        ))}
      </ul>

      <div className="tab-contents">
        {stayExperience[activeTab].map((item) => (
        <div className="tabContentDetails">  
          <div className="items-sections" key={item.label}>
            <label>{item.label}</label>
            <p>{item.type}</p>
          </div>
        </div>  
        ))}
      </div>
    </div>
    )
};
export default StayExperience;