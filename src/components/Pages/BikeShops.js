import React from "react";
import "./BikeShops.css";

const BikeShops = () => {
  return (
    <div className="container">
      <div className="trial-text">
        <h1 className="titles">South Side Cyclery</h1>
        <div>
          <p className="infoBlock">6969 Gravois Ave St Louis, MO 63116</p>
          <lb>314-481-1120</lb>
          <h4 className="hours">Hours:</h4>
          <ul>
            <li> Everyday 10AM-6PM</li>
            <li>CLOSED MONDAYS</li>
          </ul>
        </div>
        <h1 className="titles">St. Louis BWorks</h1>
        <div>
          <p className="infoBlock">2414 Menard St, St. Louis, MO 63104</p>
          <lb>(314) 664-0828</lb>
          <h4 className="hours">Hours:</h4>
          <ul>
            <li>Tuesday/Thursday 11AM-7PM</li>
            <li> Sunday 10AM-2PM</li>
            <li>CLOSED MONDAYS, WEDNESDAYS, FRIDAYS, SUNDAYS</li>
          </ul>
        </div>
        <h1 className="titles">Road Crew Coffee & Cycles</h1>
        <div>
          <p className="infoBlock">3172 Morgan Ford Rd, St. Louis, MO 63116</p>
          <lb>(314) 282-0705</lb>
          <h4 className="hours">Hours:</h4>
          <ul>
            <li> Everyday 8AM-6PM</li>
          </ul>
        </div>
        <h1 className="titles">Big Shark Bicycle Company</h1>
        <div>
          <p className="infoBlock">1155 S Big Bend Blvd, St. Louis, MO 63117</p>
          <lb>(314) 862-1188</lb>
          <h4 className="hours">Hours:</h4>
          <ul>
            <li> Monday-Friday 10AM-8PM</li>
            <li> Saturday 10AM-6PM</li>
            <li>Sunday 12PM-5PM</li>
          </ul>
        </div>
        <h1 className="titles">Trailhead Mesa Cycles</h1>
        <div>
          <p className="infoBlock">
            035 S Big Bend Blvd, Richmond Heights, MO 63117
          </p>
          <lb>(314) 645-4447</lb>
          <h4 className="hours">Hours:</h4>
          <ul>
            <li> Monday-Friday 12PM-6PM</li>
            <li> Saturday 10AM-6PM</li>
            <li>CLOSED SUNDAYS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BikeShops;
