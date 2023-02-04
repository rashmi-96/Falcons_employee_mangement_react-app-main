import React from "react";
import "../Components/CssFiles/Service.css";
// import {EmployeeManagement} from "./pages/EmployeeManagement";
// import {project }from "./pages/projectEnquiry";
// import {Home} from "./Home";
import { Link } from "react-router-dom";

//icons
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
import TileView from "./Dashboard/Tileview";
import bgimg from "./../../src/assets/bagground.jpg";

const userItems = [
  {
    name: "My Task",
    path: "/Employee/tasks",
    icon: <TaskIcon />,
  },
  {
    name: "My Timesheet",
    path: "/Employee/Timesheet",
    icon: <MoreTimeOutlinedIcon />,
  },
  {
    name: "Leave Request",
    path: "/Employee/leaverequests",
    icon: <PortraitOutlinedIcon />,
  },
  // {
  //   name: "Event Calender",
  //   path: "/EventCalander",
  //   icon: <CalendarMonthIcon />,
  // },
  {
    name: "Contacts",
    path: "/Employee/Contact",
    icon: <PeopleAltIcon />,
  },
];

const adminItems = [
  {
    name: "Emp Managment",
    path: "/Employee/Details",
    icon: <PeopleAltIcon />,
  },
  {
    name: "Project Enquiry",
    path: "/ProjectEnquiry",
    icon: <AddchartOutlinedIcon />,
  },
  {
    name: "TimeSheet Logs",
    path: "/Timesheetlogs",
    icon: <TimelineOutlinedIcon />,
  },
  {
    name: "Leave Management",
    path: "/LeaveManagement",
    icon: <AssignmentIndOutlinedIcon />,
  },
  // {
  //   name: "Event Calender",
  //   path: "/EventCalander",
  //   icon: <CalendarMonthIcon />,
  // },
  {
    name: "Contacts",
    path: "/Employee/Contact",
    icon: <PeopleAltIcon />,
  },
];

const UserType = sessionStorage.getItem("UserType");

function logout() {
  if (sessionStorage.getItem("UserType") !== null) {
    sessionStorage.setItem("UserType", "");
    location.reload();
  }
}

function Service() {
  return (
    <div
      className="service"
      id="Services"
      style={{
        zIndex: 9999,
        borderRadius: "20px",
        backgroundImage: { bgimg },
        backgroundSize: "cover",
      }}
    >
      <button
        className="glow-on-hover"
        onClick={logout}
        // style={{
        //   marginTop: 100,
        //   borderRadius: 10,
        // }}
      >
        LOG OUT
      </button>
      <Card
        className="cardservices"
        style={{
          padding: 5,
          borderRadius: 20,
          backgroundColor: " rgba(255, 255, 255, .15)",
          backdropFilter: "blur(1px)",
          boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .8)",
        }}
      >
        {/* //component__space */}

        <div className="heading"></div>

        <div className="containerservice">
          <div className="row">
            {UserType == "Admin"
              ? adminItems.map((section, i) => (
                  <TileView
                    path={adminItems[i].path}
                    name={adminItems[i].name}
                    icon={adminItems[i].icon}
                  />
                ))
              : userItems.map((section, i) => (
                  <TileView
                    path={userItems[i].path}
                    name={userItems[i].name}
                    icon={userItems[i].icon}
                  />
                ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Service;
