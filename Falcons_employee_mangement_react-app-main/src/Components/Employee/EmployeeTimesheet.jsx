import { Button, Card, CardHeader, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { variables } from "../../variables";

export default class EmployeeTimesheet extends Component {
  state = {
    Mytimesheet: [],
    Emp_id: 0,
    Date: "",
    Description: "",
    start_time: "",
    Task_ID: "",
    end_time: "",
    break_time: "",
    EmpFist_Name: "",
  };

  refreshList() {
    fetch(variables.API_URL + `Mytimesheet?emp_id=${this.state.Emp_id}`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({ Mytimesheet: emp });
        console.log(emp);
      });
    // sessionStorage.getItem("Emp_id");
    this.state.Emp_id = sessionStorage.getItem("Emp_id");
    this.state.EmpFist_Name = sessionStorage.getItem("EmpFist_Name");
  }

  //
  //begin
  componentDidMount = () => {
    this.refreshList();
  };

  updateClick() {
    fetch(variables.API_URL + `Mytimesheet`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Emp_id: parseInt(this.state.Emp_id),
        Date: this.state.Date,
        Description: this.state.Description,
        Task_ID: parseInt(this.state.Task_ID),
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        break_time: this.state.break_time,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  // changeEmp_id = (e) => {
  //   this.setState({ Emp_id: e.target.value });
  // };
  changeDate = (e) => {
    this.setState({ Date: e.target.value });
  };
  changeDescription = (e) => {
    this.setState({ Description: e.target.value });
  };
  changeTask_ID = (e) => {
    this.setState({ Task_ID: e.target.value });
  };
  changestart_time = (e) => {
    this.setState({ start_time: e.target.value });
  };
  changeend_time = (e) => {
    this.setState({ end_time: e.target.value });
  };
  changebreak_time = (e) => {
    this.setState({ break_time: e.target.value });
  };

  render() {
    const {
      Mytimesheet,
      Date,
      Description,
      Task_ID,
      start_time,
      end_time,
      break_time,
    } = this.state;
    return (
      <div>
        <Card className="card">
          <CardHeader
            title={<Typography className="cardHeader">Timesheet </Typography>}
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

          <h1>my timesheet</h1>
        </Card>
        <Card className="card">
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
                  <th>Emp_id</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Task_ID</th>
                  <th>start_time</th>
                  <th>end_time</th>
                  <th>break_time</th>

                  {/* <th>total_hours_time</th> */}
                </tr>
              </thead>
              <tbody>
                {Mytimesheet.map((emp) => (
                  <tr key={emp.Emp_id}>
                    <td>{emp.Emp_id}</td>
                    <td>{emp.Date}</td>
                    <td>{emp.Description} </td>
                    <td>{emp.Task_ID}</td>
                    <td>{emp.start_time} </td>
                    <td>{emp.end_time} </td>
                    <td>{emp.break_time} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card className="card">
          <div>
            <h1
              style={{
                fontSize: 29,
                color: "black",
                fontFamily: "monospace",
                marginTop: "30px",
                marginLeft: "20px",
              }}
            >
              UPDATE Timesheet
            </h1>
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 w-100 bd-highlight">
                <div className="input-group mb-3">
                  <span className="input-group-text">MY EMP ID</span>
                  <input
                    type="number"
                    disabled={true}
                    className="form-control"
                    value={this.state.Emp_id}
                    // onChange={this.changeEmpfirstName}
                  />
                  <span className="input-group-text">Date</span>
                  <input
                    type="date"
                    className="form-control"
                    value={Date}
                    onChange={this.changeDate}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Description</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Description}
                    onChange={this.changeDescription}
                  />
                  <span className="input-group-text">Task_ID</span>
                  <input
                    type="number"
                    className="form-control"
                    value={Task_ID}
                    onChange={this.changeTask_ID}
                  />

                  {/* <span className="input-group-text">Last Name</span>
                  <input
                    type="text"
                    className="form-control"
                    // value={EmpLast_Namec}
                    // onChange={this.changeEmpLast_Namec}
                  /> */}
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">start_time</span>
                  <input
                    type="time"
                    className="form-control"
                    value={start_time}
                    onChange={this.changestart_time}
                  />
                  <span className="input-group-text">end_time</span>
                  <input
                    type="time"
                    className="form-control"
                    value={end_time}
                    onChange={this.changeend_time}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">break_time</span>
                  <input
                    type="time"
                    className="form-control "
                    value={break_time}
                    onChange={this.changebreak_time}
                  />
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.updateClick()}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
