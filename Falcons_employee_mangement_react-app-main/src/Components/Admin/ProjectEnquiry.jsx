import { Button, Card, CardHeader, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Taskscreen from "./subcomponents/projectEnquaryview/Taskscreen";
//import { EmployeeProps } from "../Employee/EmployeeTasks";
import AddProject from "./subcomponents/projectEnquaryview/AddProject";
import "./../CssFiles/custom.css";

export default class ProjectEnquir extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "tab1",
    };
  }

  // Task begin

  //Task end
  handleTabclick = (tabName) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    return (
      <div className="screen">
        <Card className="card" style={{ borderRadius: 20, marginTop: 100 }}>
          <CardHeader
            title={
              <Typography className="cardHeader">Project Enquiry </Typography>
            }
          />

          <div>
            <br></br>
          </div>
          <div>
            <Link to="/">
              <Button
                variant="contained"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#21b6ae",
                  padding: "12px 36px",
                  fontSize: "12px",
                  margin: "20px",
                }}
              >
                Back
              </Button>
            </Link>
          </div>

          {/* <VerticalTabs /> */}
        </Card>

        {/* Task Table code begin */}
        <div>
          <Card
            className="tabcard"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <div className="tab-menu">
              <button
                onClick={() => this.handleTabclick("tab1")}
                className={`tab-button ${
                  this.state.activeTab === "tab1" ? "active" : ""
                }`}
              >
                <AddIcon style={{ marginRight: "10px", marginLeft: "-15px" }} />
                Add Projects
              </button>
              <button
                onClick={() => this.handleTabclick("tab2")}
                className={`tab-button ${
                  this.state.activeTab === "tab2" ? "active" : ""
                }`}
              >
                <AddIcon style={{ marginRight: "10px", marginLeft: "-15px" }} />
                Add Tasks
              </button>
            </div>
            <div className="tab-content">
              {this.state.activeTab === "tab1" && (
                <div>
                  <AddProject />{" "}
                </div>
              )}
              {this.state.activeTab === "tab2" && (
                <div>
                  {" "}
                  <Taskscreen />
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* modal */}

        {/* Task Table code ENd */}
      </div>
    );
  }
}
// add a peertable
