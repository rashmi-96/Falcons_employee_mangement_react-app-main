import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Components/CssFiles/App.css";
import Footer from "./Components/Footer";
import ResponsiveAppBar from "./Components/header";
import Home from "./Components/Home";
import Service from "./Components/Service";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import ProjectEnquiry from "./Components/Admin/ProjectEnquiry";
import LeaveManagement from "./Components/Admin/LeaveManagement";
import EmployeeManagement from "./Components/Admin/EmployeeManagement";
import EmployeeTasks from "./Components/Employee/EmployeeTasks";
import EmployeeTimesheet from "./Components/Employee/EmployeeTimesheet";
import LeaveRequest from "./Components/Employee/LeaveRequest";
import ContactEmployee from "./Components/pages/ContactEmployee";
import EventCalender from "./Components/pages/EventCalender";
import TimeSheetLogs from "./Components/Admin/TimeSheetLogs";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  if (sessionStorage.getItem("UserType")) {
    return (
      <div className="App">
        <div className="c-app c-default-layout">
          {/* <button onClick={logout}>click to logout</button> */}
          <ResponsiveAppBar />

          <div className="c-body">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Service />} />
                <Route
                  path="/Employee/Details"
                  element={<EmployeeManagement />}
                />
                <Route path="/app" render={(props) => <App {...props} />} />
                <Route
                  path="/dashboard"
                  render={(props) => <Dashboard {...props} />}
                />
                <Route path="/ProjectEnquiry" element={<ProjectEnquiry />} />
                <Route path="/Timesheetlogs" element={<TimeSheetLogs />} />
                <Route path="/LeaveManagement" element={<LeaveManagement />} />
                <Route path="/Employee/tasks" element={<EmployeeTasks />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/Employee/Timesheet"
                  element={<EmployeeTimesheet />}
                />
                <Route
                  path="/Employee/Details"
                  element={<EmployeeManagement />}
                />
                <Route
                  path="/Employee/leaverequests"
                  element={<LeaveRequest />}
                />
                <Route path="/Employee/Contact" element={<ContactEmployee />} />
                <Route
                  path="/Employee/Contact"
                  render={(props) => <ContactEmployee {...props} />}
                />
                <Route path="/EventCalander" element={<EventCalender />} />
                Timesheetlogs
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}

export default App;
