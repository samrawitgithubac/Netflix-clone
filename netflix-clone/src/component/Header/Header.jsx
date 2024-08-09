import React from 'react'
import './header.css'
import img from "../../asset/images/Netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Header() {
  return (
    <div>
     <div className="header-wrapper">
        <div className="left-header-wapper">
          <ul>
            <div>
              <li className="imgwrap">
                <img src={img} alt="" width="100px" className="logo" />
              </li>
            </div>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages </li>
          </ul>
        </div>
        <div className="right-header-wapper">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>

   
  )
}
