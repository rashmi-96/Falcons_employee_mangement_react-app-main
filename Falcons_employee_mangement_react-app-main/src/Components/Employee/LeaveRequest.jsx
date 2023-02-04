import {
  Button,
  Card,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MultiActionAreaCard from "../Admin/subcomponents/LeaveManagement/LeaveCardview";
import "../CssFiles/custom.css";
import { variables } from "../../variables";

import { experimentalStyled as styled } from "@mui/material/styles";

export default class LeaveRequest extends Component {
  state = {
    MyleaveReqs: [],
    Emp_id: 0,
    Anual_leaves: 0,
    Sick_leaves: 0,
    Study_leaves: 0,
    leaveTaken_dates: 0,
    Available_dates: 0,
  };

  componentDidMount = () => {
    this.refreshList();
  };
  refreshList() {
    fetch(variables.API_URL + `MyLeaveRequest?emp_id=${this.state.Emp_id}`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({
          MyleaveReqs: emp,
          Anual_leaves: emp[0].Anual_leaves,
          Sick_leaves: emp[0].Sick_leaves,
          Study_leaves: emp[0].Study_leaves,
          leaveTaken_dates: emp[0].leaveTaken_dates,
          Available_dates: emp[0].Available_dates,
        });
        //console.log(emp[0]);

        // this.setState({
        //   leaveTaken_dates: this.state.MyleaveReqs[0].leaveTaken_dates,
        //   Study_leaves: this.state.MyleaveReqs[0].Study_leaves,
        //   Anual_leaves: this.state.MyleaveReqs[0].Anual_leaves,
        //   Sick_leaves: this.state.MyleaveReqs[0].Sick_leaves,
        //   Available_dates: this.state.MyleaveReqs[0].Available_dates,
        // });
      });
    // sessionStorage.getItem("Emp_id");
    this.state.Emp_id = sessionStorage.getItem("Emp_id");
    this.state.EmpFist_Name = sessionStorage.getItem("EmpFist_Name");
  }

  ////begin

  render() {
    const {} = this.state;
    return (
      <div>
        <Card className="card">
          <CardHeader
            title={
              <Typography className="cardHeader">My Leave Requests</Typography>
            }
          />
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

          <div className="d-flex flex-row bd-highlight mb-3 allbagedalign ">
            <h1 className="leaveReqBadges">
              {" "}
              <span class="badge badge-secondary badgeleave">
                <h2 className="mobileviewh2">anual leaves</h2> <br></br>
                {this.state.Anual_leaves}
              </span>
            </h1>
            <h1 className="leaveReqBadges">
              {" "}
              <span class="badge badge-secondary badgeleave">
                <h2 className="mobileviewh2">sick leaves</h2> <br></br>
                {this.state.Sick_leaves}
              </span>
            </h1>
            <h1 className="leaveReqBadges">
              {" "}
              <span class="badge badge-secondary badgeleave ">
                <h2 className="mobileviewh2">Leave taken</h2> <br></br>
                {this.state.leaveTaken_dates}
              </span>
            </h1>
            {/* <h1 className="leaveReqBadges">
              {" "}
              <span class="badge badge-secondary badgeleave">
                <h2> study leaves</h2>
                <br></br>
                {this.state.Available_dates}
              </span>
            </h1> */}
            <h1 className="leaveReqBadges">
              {" "}
              <span class="badge badge-secondary badgeleave">
                <h2 className="mobileviewh2"> available leaves</h2>
                <br></br>
                {this.state.Available_dates}
              </span>
            </h1>
          </div>

          {/* 
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={2} key={index}>
              <Item>
                {" "}
                <MultiActionAreaCard />{" "}
              </Item>
            </Grid>
          ))}
        </Grid> */}
        </Card>
      </div>
    );
  }
}
