import React, { Component } from "react";
import { Button, Card, CardHeader, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { variables } from "../../variables";

export default class TimeSheetLogs extends Component {
  state = {
    Timesheetlogs: [],
    timesheet_id: "",
    Date: "",
    Description: "",
    Emp_id: "",
    Task_ID: "",
    break_time: "",
    start_time: "",
    end_time: "",
    net_hours_time: "",
    total_hours_time: "",
    EmpFist_Name: "",
  };

  refreshList() {
    fetch(variables.API_URL + `TimeSheetlogs`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({ Timesheetlogs: emp });
        console.log(emp);
      });
  }
  //
  //begin
  componentDidMount = () => {
    this.refreshList();
  };

  formatDate(dateValue) {
    dateValue = new Date(dateValue).toLocaleDateString("en-AU");

    return dateValue;
  }
  //

  render() {
    const {
      Timesheetlogs,
      timesheet_id,
      Date,
      Description,
      Emp_id,
      Task_ID,
      break_time,
      start_time,
      end_time,
      net_hours_time,
      total_hours_time,
    } = this.state;
    return (
      <div>
        <Card
          className="card cardtopview"
          style={{
            borderRadius: 20,
            marginLeft: 40,
            marginRight: 40,
            marginTop: 130,
          }}
        >
          <CardHeader
            title={
              <Typography className="cardHeader">Timesheet Logs </Typography>
            }
          />
          <div>
            <br></br>
          </div>
          <Link to="/">
            <Button
              variant="contained"
              className="backbtn"
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

          <h1>Timesheetlogs</h1>
        </Card>
        <Card style={{ borderRadius: 20, marginLeft: 40, marginRight: 40 }}>
          <div
            className="table-responsive-sm"
            style={{ marginTop: 40, marginBottom: 40 }}
          >
            <table
              id="example"
              className="table  table-bordered table-striped table-hover table-sm "
              style={{ marginLeft: 15, marginRight: 10 }}
              width="100%"
              cellspacing="0"
            >
              <thead className="thead-dark ">
                <tr className="table-primary table-bordered">
                  <th>Timesheet Id</th>
                  <th>Task_ID</th>
                  <th>Emp_id</th>
                  <th>EmpFist_Name</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>

                  <th>Break Hours</th>
                  <th>Total Hours</th>
                  {/* <th>total_hours_time</th> */}
                </tr>
              </thead>
              <tbody>
                {Timesheetlogs.map((emp) => (
                  <tr key={emp.timesheet_id}>
                    <td>{emp.timesheet_id}</td>
                    <td>{emp.Task_ID} </td>
                    <td>{emp.Emp_id}</td>
                    <td>{emp.EmpFist_Name}</td>

                    <td>{this.formatDate(emp.Date)}</td>
                    <td>{emp.start_time}</td>
                    <td>{emp.end_time}</td>

                    <td>{emp.break_time} </td>
                    <td>{emp.net_hours_time}</td>
                    {/* <td>{emp.total_hours_time} </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  }
}
