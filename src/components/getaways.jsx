import React, { useState } from "react";
import '../styles/getaways.css';

const getaways = {
  Popular: [
    { name: "Angaston", type: "Cottage rentals" },
    { name: "Balingup", type: "Holiday rentals" },
    { name: "Balmain", type: "Apartment rentals" },
    { name: "Banglow", type: "House rentals" },
    { name: "Battery Point", type: "Holiday rentals" },
    { name: "Beechworth", type: "Cottage rentals" },
    { name: "Berridale", type: "Holiday rentals" },
    { name: "Blackheath", type: "Cottage rentals" },
    { name: "Bridgetown", type: "Holiday rentals" },
    { name: "Bright", type: "Holiday rentals" },
    { name: "Burnswick", type: "Holiday rentals" },
    { name: "Castlemaine", type: "Holiday rentals" },
    { name: "Clunes", type: "Holiday rentals" },
    {name: "Cooroy", type: "Holiday rentals"},
    {name: "Corowa", type: "Holiday rentals"},
    {name: "Crookwell", type: "Holiday rentals"}
  ],
  Coastal: [
    { name: "Byron Bay", type: "Beach rentals" },
    { name: "Noosa", type: "Holiday rentals" },
  ],
  Outdoors: [
    { name: "Byron Bay", type: "Beach rentals" },
    { name: "Noosa", type: "Holiday rentals" },
  ],
  Islands: [
    { name: "Byron Bay", type: "Beach rentals" },
    { name: "Noosa", type: "Holiday rentals" },
  ],
  Lakes: [
    { name: "Byron Bay", type: "Beach rentals" },
    { name: "Noosa", type: "Holiday rentals" },
  ],
  Uniquestays: [
    { name: "Byron Bay", type: "Beach rentals" },
    { name: "Noosa", type: "Holiday rentals" },
  ],
  Categories: [
    { name: "Byron Bay", type: "Beach rentals" },
    { name: "Noosa", type: "Holiday rentals" },
  ],
  ThingsToDo: [
    { name: "Byron Bay", type: "Beach rentals" },
    { name: "Noosa", type: "Holiday rentals" },
  ],

};

function GetAways() {
  const [activeTab, setActiveTab] = useState("Popular");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="getaway-container">
    <div className="getaway-section">
      <h3 id="getaway-h">Inspiration for future getaways</h3>
      <ul className="tab-menu">
        {Object.keys(getaways).map((tab) => (
          <li
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className="locations-grid">
        {getaways[activeTab].map((location) => (
          <div className="location-item" key={location.name}>
            <h3>{location.name}</h3>
            <p>{location.type}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default GetAways;
