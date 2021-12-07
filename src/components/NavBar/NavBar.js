import React, { useState } from "react";
// import { MenuItems } from "./MenuItems";
// import SidebarMenu from "./SidebarMenu";
import "./NavBar.css";

const NavBar = (props) => {
  const { sidebar, setSidebarOpen } = props;

  const [isClicked, setIsClicked] = useState(false);

  const menuClickHandler = () => {
    setIsClicked(!isClicked);
    setSidebarOpen(!sidebar);
  };

  return (
    <header>
      <nav className="menu-icon">
        <div onClick={menuClickHandler}>
          <i className={sidebar ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

/* .NavBarItems{
        position: relative;
    background: linear-gradient(90deg, rgb(24, 24, 26), rgb(32, 32, 34) 100%)
    ;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: relative;
}
    } 

    .nav-menu{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 500px;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;

        //Original:
         display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        width: 70vw;
        justify-content: end;
        margin-right: 2rem;
    }

    .nav-menu-active {
        background: #6668f4;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    }

    .nav-links {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        //ORIGINAL:
        color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    }

    .nav-links:hover {
        background-color: #7577fa;
        border-radius: 0;

        //ORIGINAL:
        color: #6d76f7;
    border-radius: 4px;
    transition: all 0.2s ease-out;
    }

    .navbar-logo {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 50%);
    }

    .menu-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;

        ORIGINAL:
        display: none;
    }

    .fa-times {
        color: #fff;
        font-size: 2rem;
    }
    
*/
