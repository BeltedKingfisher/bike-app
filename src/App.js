import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SidebarMenu from "./components/NavBar/SidebarMenu";
import BikeShops from "./components/Pages/BikeShops";
import ContactUs from "./components/Pages/ContactUs";
import Home from "./components/Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Fragment>
      <NavBar sidebar={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen ? (
        <SidebarMenu sidebar={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      ) : null}
      <div className="container" onClick={handleClose}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path="/bike-shops">
            <BikeShops />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
