import React, { Component } from "react";
import "devextreme/dist/css/dx.light.css";
import "../CssFiles/custom.css";

import { Button, Card, CardHeader, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { variables } from "../../variables";
import AddIcon from "@mui/icons-material/Add";

export default class LeaveManagement extends Component {
  state = {
    EmpLeave: [],
    emplist: [],
    Emp_id: 0,
    EmpFist_Name: "",
    Anual_leaves: 0,
    Sick_leaves: 0,
    Study_leaves: 0,
    leaveTaken_dates: 0,
    modalTitle: "",
  };
  refreshList() {
    fetch(variables.API_URL + `leaveenquiry`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({ EmpLeave: emp });
        console.log(emp);
      });
    fetch(variables.API_URL + `EmployeeDetails`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({ emplist: emp });
      });
    // sessionStorage.getItem("Emp_id");
    // this.state.Emp_id = sessionStorage.getItem("Emp_id");
    //this.state.EmpFist_Name = sessionStorage.getItem("EmpFist_Name");
  }
  //
  //begin
  componentDidMount = () => {
    this.refreshList();
  };

  updateClick() {
    fetch(variables.API_URL + `leaveenquiry`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        EmpFist_Name: this.state.EmpFist_Name,
        Emp_id: parseInt(this.state.Emp_id),
        Anual_leaves: parseInt(this.state.Anual_leaves),
        Sick_leaves: parseInt(this.state.Sick_leaves),
        Study_leaves: parseInt(this.state.Study_leaves),
        leaveTaken_dates: parseInt(this.state.leaveTaken_dates),
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
  addClick() {
    this.setState({
      modalTitle: "Add Employee",
      Emp_id: "",
      EmpFist_Name: "",
      Anual_leaves: "",
      Sick_leaves: "",
      Study_leaves: "",
      leaveTaken_dates: "",
    });
  }
  changeEmpid = (e) => {
    this.setState({ Emp_id: e.target.value });
  };

  changeEmpFist_Name = (e) => {
    this.setState({ EmpFist_Name: e.target.value });
  };

  changeAnual_leaves = (e) => {
    this.setState({ Anual_leaves: e.target.value });
  };

  changeSick_leaves = (e) => {
    this.setState({ Sick_leaves: e.target.value });
  };

  changeStudy_leaves = (e) => {
    this.setState({ Study_leaves: e.target.value });
  };
  changeleaveTaken_dates = (e) => {
    this.setState({ leaveTaken_dates: e.target.value });
  };

  render() {
    const {
      modalTitle,
      EmpLeave,
      Emp_id,
      EmpFist_Name,
      Anual_leaves,
      Sick_leaves,
      Study_leaves,
      leaveTaken_dates,
      emplist,
    } = this.state;
    return (
      <div>
        <Card className="card" style={{ borderRadius: 20, marginTop: 100 }}>
          <CardHeader
            title={
              <Typography className="cardHeader">Leave Management </Typography>
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
        </Card>

        <Card className="card">
          <button
            type="button"
            className="btn float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              backgroundColor: "#21b6ae",
              borderRadius: 10,
              color: "white",
              width: 230,
              //backgroundColor:  "rgb(14, 113, 158)",
              padding: "12px 10px",
              fontSize: "12px",
              margin: "20px",
              borderColor: "#21b6ae",
            }}
            onClick={() => this.addClick()}
          >
            <AddIcon
              style={{ marginRight: "10px", marginLeft: "-15px" }}
              onClick={() => this.addClick()}
            />
            Add new Employee
          </button>

          <table
            id="example"
            className="table  table-bordered table-striped table-hover table-sm "
            style={{ marginLeft: 15, marginRight: 10 }}
            width="100%"
            cellspacing="0"
          >
            <thead className="thead-dark ">
              <tr className="table-primary table-bordered">
                <th>Leave ID</th>
                <th> Emp_id</th>
                <th>EmpFist_Name</th>
                <th>Anual_leaves</th>
                <th>Sick_leaves</th>
                <th>Study_leaves</th>
                <th>leaveTaken_dates</th>
                <th>Available_dates</th>
              </tr>
            </thead>
            <tbody>
              {EmpLeave.map((emp) => (
                <tr key={emp.leaveAvailable_ID}>
                  <td>{emp.leaveAvailable_ID}</td>
                  <td>{emp.Emp_id}</td>
                  <td>{emp.EmpFist_Name}</td>
                  <td>{emp.Anual_leaves}</td>
                  <td>{emp.Sick_leaves} </td>
                  <td>{emp.Study_leaves} </td>
                  <td>{emp.leaveTaken_dates}</td>
                  <td>{emp.Available_dates}</td>
                  {/* <td style={{ display: "flex" }}>
                    <button
                      type="button"
                      className=" btn-info mr-1 btnupdate"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => this.editClick(emp)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className="modal fade responsive"
            id="exampleModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div
                className="modal-content"
                style={{
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                }}
              >
                <div
                  className="modal-header modalhead"
                  style={{ borderTopLeftRadius: 30 }}
                >
                  <h5 className="modal-title">{modalTitle}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="m-4">
                    <div className="row g-2 formresponsive">
                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">Emp_id</span>
                          {/* <input
                            type="number"
                            className="form-control"
                            value={Emp_id}
                            onChange={this.changeEmpid}
                          /> */}
                          <select
                            type="text"
                            className="form-select"
                            value={Emp_id}
                            onChange={this.changeEmpid}
                          >
                            {emplist.map((emp) => (
                              <option key={emp.Emp_id}>
                                {emp.Emp_id}
                                <h1> :</h1>
                                {emp.EmpFist_Name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">EmpFist_Name</span>
                          {/* <input
                            type="text"
                            className="form-select"
                            value={EmpFist_Name}
                            onChange={this.changeEmpFist_Name}
                          /> */}
                          <select
                            type="text"
                            className="form-select"
                            value={EmpFist_Name}
                            onChange={this.changeEmpFist_Name}
                          >
                            {emplist.map((emp) => (
                              <option key={emp.Emp_id}>
                                {emp.EmpFist_Name} <h1> :</h1>
                                {emp.Emp_id}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">Anual_leaves</span>
                          <input
                            type="number"
                            className="form-select"
                            value={Anual_leaves}
                            onChange={this.changeAnual_leaves}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">Sick_leaves </span>
                          <input
                            type="number"
                            className="form-control"
                            value={Sick_leaves}
                            onChange={this.changeSick_leaves}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">Study_leaves</span>
                          <input
                            type="number"
                            className="form-control"
                            value={Study_leaves}
                            onChange={this.changeStudy_leaves}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group">
                          <span className="input-group-text">
                            leaveTaken_dates
                          </span>
                          <input
                            type="number"
                            className="form-control"
                            value={leaveTaken_dates}
                            onChange={this.changeleaveTaken_dates}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.updateClick()}
                  >
                    Create
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
