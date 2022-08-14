import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LoactionOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { headerItems } from "./HeaderData";
import { width } from "@mui/system";

function Header() {
  const { cartItem } = useSelector((state) => state.key);
  const data = headerItems;
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon_logo"
          />
        </Link>
        <div className="header-option" style={{ marginRight: "-10px" }}>
          <LoactionOnOutlinedIcon />
        </div>
        <div className="header-option">
          <span className="header-option1">Hello</span>
          <span className="header-option2">Select Your Address</span>
        </div>
        <div className="search">
          <select>
            <option>All</option>
          </select>
          <input type="text" className="searchInput" />
          <SearchIcon className="searchIcon" />
        </div>
        <div className="header-nav">
          <Link to="/login" className="header-link">
            <div className="header-option">
              <span className="header-option1">Hello Guest</span>
              <span className="header-option2">Sign In</span>
            </div>
          </Link>
          {/* <Link to="/orders" className="header-link"> */}
            <div className="header-option">
              <span className="header-option1">Returns</span>
              <span className="header-option2">& orders</span>
            </div>
          {/* </Link> */}
          <Link to="/checkout" className="header-link">
            <div className="header-basket">
              <ShoppingCartOutlinedIcon />
              <span className="header-option2 basket-count">{cartItem}</span>
            </div>
          </Link>
        </div>
      </nav>
      <div className="extended-navbar" style={{display:'flex',justifyContent:'space-evenly', color: "white" ,width:'100%'}}>
       {headerItems && headerItems.map(item=>(<p>{item}</p>))}
      </div>
    </>
  );
}

export default Header;
