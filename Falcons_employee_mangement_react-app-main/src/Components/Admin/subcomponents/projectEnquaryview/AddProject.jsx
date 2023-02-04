import { Button, Card, CardHeader, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { variables } from "../../../../variables";
import "./../../../CssFiles/custom.css";

export default class AddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      ProjectName: "",
      modalTitle: "",
      ProjectID: 0,
      Description: "",
      Customer: "",
      AssignTo: "",
      Assigned_Date: "",
      Due_Date: "",
      Comments: "",
      Status: "",
      Tasks: "",
      TasksArry: [],
      empployees: [],
      activeKey: 1,
    };
  }
  refreshList() {
    fetch(variables.API_URL + `Project`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ projects: data });
      });

    fetch(variables.API_URL + `Tasks`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ TasksArry: data });
      });
    fetch(variables.API_URL + `EmployeeDetails`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ empployees: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }

  // Project enquiry list begin

  changeProjectName = (e) => {
    this.setState({ ProjectName: e.target.value });
  };
  changeProjectID = (e) => {
    this.setState({ ProjectID: e.target.value });
  };
  changeDescription = (e) => {
    this.setState({ Description: e.target.value });
  };
  changeAssignTo = (e) => {
    this.setState({ AssignTo: e.target.value });
  };
  changeAssigned_Date = (e) => {
    this.setState({ Assigned_Date: e.target.value });
  };
  changeDue_Date = (e) => {
    this.setState({ Due_Date: e.target.value });
  };
  changeComments = (e) => {
    this.setState({ Comments: e.target.value });
  };
  changeStatus = (e) => {
    this.setState({ Status: e.target.value });
  };
  changeTasks = (e) => {
    this.setState({ Tasks: e.target.value });
  };
  changeTask_ID = (e) => {
    this.setState({ Task_ID: e.target.value });
  };
  changeCustomer = (e) => {
    this.setState({ Customer: e.target.value });
  };
  addClick() {
    this.setState({
      modalTitle: "Add Employee",
      ProjectID: 0,
      ProjectName: "",
      Description: "",
      Customer: "",
      AssignTo: "",
      Assigned_Date: "",
      Due_Date: "",
      Comments: "",
      Status: "",
      Tasks: "",
      Task_ID: "",
      EmpFist_Name: "",
    });
  }

  editClick(emp) {
    this.setState({
      ProjectID: emp.ProjectID,
      ProjectName: emp.ProjectName,
      Description: emp.Description,
      Customer: emp.Customer,
      AssignTo: emp.AssignTo,
      Assigned_Date: emp.Assigned_Date,
      Due_Date: emp.Due_Date,
      Comments: emp.Comments,
      Status: emp.Status,
      Tasks: emp.Tasks,
      Task_ID: emp.Task_ID,
    });
  }
  createClick() {
    fetch(variables.API_URL + `Project`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProjectName: this.state.ProjectName,
        Description: this.state.Description,
        Customer: this.state.Customer,
        AssignTo: this.state.AssignTo,
        Assigned_Date: this.state.Assigned_Date,
        Due_Date: this.state.Due_Date,
        Comments: this.state.Comments,
        Status: this.state.Status,
        Tasks: this.state.Tasks,
        Task_ID: this.state.Task_ID,
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
  updateClick() {
    fetch(variables.API_URL + `Project`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProjectID: this.state.ProjectID,
        ProjectName: this.state.ProjectName,
        Description: this.state.Description,
        Customer: this.state.Customer,
        AssignTo: this.state.AssignTo,
        Assigned_Date: this.state.Assigned_Date,
        Due_Date: this.state.Due_Date,
        Comments: this.state.Comments,
        Status: this.state.Status,
        Tasks: this.state.Tasks,
        Task_ID: this.state.Task_ID,
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

  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + `Project/` + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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
  }
  // Project enquiry list end
  // Task begin

  //Task end

  formatDate(dateValue) {
    dateValue = new Date(dateValue).toLocaleDateString("en-AU");

    return dateValue;
  }

  render() {
    const {
      ProjectID,
      projects,
      modalTitle,
      ProjectName,
      Description,
      Customer,
      AssignTo,
      Assigned_Date,
      Due_Date,
      Comments,
      Status,
      Tasks,
      Task_ID,
      TasksArry,
      Task_description,
      Assigned_to,
      Emp_id,
      Status_id,
      Developer_notes,
      empployees,
      EmpFist_Name,
    } = this.state;
    return (
      <Card className="card cardmobile" style={{ borderRadius: 10 }}>
        <div></div>
        <div>
          <Typography align="left">
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
              Add new project
            </button>
            {/* </Button>{" "} */}
          </Typography>
        </div>

        {/* <VerticalTabs /> */}
        <div className="table-responsive-sm">
          <table
            className="table table-striped table-hover table-sm table-bordered"
            style={{ marginLeft: 15, marginRight: 10 }}
          >
            <thead className="thead-dark ">
              <tr className="table-primary table-bordered">
                <th>ProjectID</th>
                <th> ProjectName</th>
                <th>Description</th>
                <th>Customer</th>
                <th>AssignTo</th>
                <th>Assigned_Date</th>
                <th>Due_Date</th>
                <th>Comments</th>
                <th>Status</th>
                <th>Tasks</th>
                <th>Task_ID</th>
                <th style={{ textAlign: "center" }}>Options</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((emp) => (
                <tr key={emp.ProjectID}>
                  <td>{emp.ProjectID}</td>
                  <td>{emp.ProjectName}</td>
                  <td>{emp.Description}</td>
                  <td>{emp.Customer}</td>
                  <td>{emp.AssignTo} </td>
                  <td>{this.formatDate(emp.Assigned_Date)} </td>
                  <td>{this.formatDate(emp.Due_Date)}</td>
                  <td>{emp.Comments}</td>
                  <td>{emp.Status} </td>
                  <td>{emp.Tasks} </td>
                  <td>{emp.Task_ID}</td>
                  <td style={{ display: "flex" }}>
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

                    <button
                      type="button"
                      //className="btn btn-light mr-1"
                      className="btn-danger mr-1 btndelete"
                      onClick={() => this.deleteClick(emp.ProjectID)}
                      style={{ padding: 10 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalTitle}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 w-100 bd-highlight">
                      <div className="input-group mb-3">
                        <span className="input-group-text">Project Name</span>
                        <input
                          type="text"
                          className="form-control"
                          value={ProjectName}
                          onChange={this.changeProjectName}
                        />

                        <span className="input-group-text">Description</span>
                        <input
                          type="text"
                          className="form-control"
                          value={Description}
                          onChange={this.changeDescription}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Customer</span>
                        <input
                          type="text"
                          className="form-control"
                          value={Customer}
                          onChange={this.changeCustomer}
                        />

                        <span className="input-group-text">AssignTo</span>
                        <select
                          type="text"
                          className="form-select"
                          value={AssignTo}
                          onChange={this.changeAssignTo}
                        >
                          {empployees.map((emp) => (
                            <option key={emp.Emp_id}>{emp.EmpFist_Name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Assigned_Date</span>
                        <input
                          type="date"
                          className="form-select"
                          value={Assigned_Date}
                          onChange={this.changeAssigned_Date}
                        />
                        <span className="input-group-text">Due_Date</span>
                        <input
                          type="date"
                          className="form-select"
                          value={Due_Date}
                          onChange={this.changeDue_Date}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Comments </span>
                        <input
                          type="text"
                          className="form-control"
                          value={Comments}
                          onChange={this.changeComments}
                        />
                        <span className="input-group-text">Status</span>
                        <input
                          type="text"
                          className="form-control"
                          value={Status}
                          onChange={this.changeStatus}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Tasks</span>
                        <input
                          type="text"
                          className="form-control"
                          value={Tasks}
                          onChange={this.changeTasks}
                        />
                        <span className="input-group-text"> Task_ID</span>
                        <input
                          type="text"
                          className="form-control"
                          value={Task_ID}
                          onChange={this.changeTask_ID}
                        />
                      </div>
                    </div>
                  </div>

                  {ProjectID == 0 ? (
                    <button
                      type="button"
                      className="btn btn-primary float-start"
                      onClick={() => this.createClick()}
                    >
                      Create
                    </button>
                  ) : null}

                  {ProjectID != 0 ? (
                    <button
                      type="button"
                      className="btn btn-primary float-start"
                      onClick={() => this.updateClick()}
                    >
                      Update
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
