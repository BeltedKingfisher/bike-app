import React, { Fragment } from "react";
import { MenuItems } from "./MenuItems";
import "./SidebarMenu.css";

const SidebarMenu = (props) => {
  return (
    <Fragment>
      <div className="sidebar-container">
        <ul className="sidebar-menu">
          {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <a className="nav-dropdown" href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default SidebarMenu;
