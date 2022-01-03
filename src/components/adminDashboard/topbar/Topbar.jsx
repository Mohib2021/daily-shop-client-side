import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Daily Shop</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/217767765_2999438257006626_5523841014575451650_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHOG6qxzrKjH94_Na74GbUzBsluscrddEIGyW6xyt10QnPnDdEWBMNaSHzAWCMg20Vv-EJg40WlpcYJ76NPKjBR&_nc_ohc=r2AIlvf8U44AX_8MLwd&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&oh=00_AT_6frTz2jVf2oTb1PS1B2fXtLi_I0jCbOwUPezWzNPstw&oe=61D855B1" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
