import React, { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SidebarMenu from "./components/NavBar/SidebarMenu";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Fragment>
      <NavBar sidebar={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen ? (
        <SidebarMenu sidebar={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      ) : null}
      <div className="container">
        <img className="home-image" src={"images/BikeImage.png"} alt="bike" />
        <h1>TESTING FONT HERE!</h1>
      </div>
    </Fragment>
  );
}

export default App;
