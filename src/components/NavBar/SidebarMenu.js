import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./SidebarMenu.css";

const SidebarMenu = (props) => {
  const { sidebar, setSidebarOpen } = props;
  const handleClose = () => {
    setSidebarOpen(!sidebar);
  };
  return (
    <Fragment>
      <div className="sidebar-container">
        <ul className="sidebar-menu">
          {MenuItems.map((item) => {
            return (
              <NavLink
                className="nav-dropdown"
                exact
                to={item.url}
                key={item.id}
                onClick={handleClose}
              >
                {item.title}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default SidebarMenu;

//<li key={item.id}>
//   <a className="nav-dropdown" href={item.url}>
//     {item.title}
//   </a>
// </li>
