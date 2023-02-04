import React, { Component } from "react";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TaskIcon from "@mui/icons-material/Task";
import MoreTimeOutlinedIcon from "@mui/icons-material/MoreTimeOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import { Card, Icon } from "@mui/material";

class TileView extends Component {
  state = {};
  render() {
    return (
      <div className="col__3">
        <Link to={this.props.path}>
          <div className="service__box pointer">
            <div className="icon">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                {this.props.icon}
              </svg>
            </div>
            <div className="service__meta">
              <h1 className="service__text"> {this.props.name} </h1>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default TileView;
