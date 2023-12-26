import React from "react";
import "./Header.css";
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">          <Link to="/" style={{ textDecoration:"none" }}>
            <div className="header__logo">
                <StorefrontIcon className="header__logoImage" fontSize="large"/>
                <h2 className="header__logoTitle">Codescribe</h2>
            </div>
          </Link>

          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </div>
      
          <div className="header__nav">
            <Link to="/login" style={{ textDecoration:"none" }}>
              <div className="nav__item">
                <span className="nav__itemLineOne">Hello Guest</span>
                <span className="nav__itemLineTwo">Sign In</span>
              </div>
            </Link>
            <div className="nav__item">
              <span className="nav__itemLineOne">Your Friendly</span>
              <span className="nav__itemLineTwo">CodeEditor</span>
            </div>
          </div>
        </div>
    );
}

export default Header;
