import { Card, Typography } from "@mui/material";
import React, { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import { variables } from "../../../../variables";
import { yellow } from "@mui/material/colors";
import "./../../../CssFiles/custom.css";

export default class Taskscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empployees: [],
      Task_ID: "",
      ProjectName: "",
      modalTitle: "",
      Task_description: "",
      Emp_id: "",
      Assigned_to: "",
      Status_id: "",
      Developer_notes: "",
      TasksArry: [],
    };
  }

  refreshList() {
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

  changeTask_ID = (e) => {
    this.setState({ Task_ID: e.target.value });
  };
  changeProjectName = (e) => {
    this.setState({ ProjectName: e.target.value });
  };
  changeTask_description = (e) => {
    this.setState({ Task_description: e.target.value });
  };
  changeEmp_id = (e) => {
    this.setState({ Emp_id: e.target.value });
  };
  changeAssigned_to = (e) => {
    this.setState({ Assigned_to: e.target.value });
  };
  changeStatus_id = (e) => {
    this.setState({ Status_id: e.target.value });
  };
  changeDeveloper_notes = (e) => {
    this.setState({ Developer_notes: e.target.value });
  };

  addClickTask() {
    this.setState({
      modalTitle: "Add Tasks",
      Task_ID: 0,
      ProjectName: "",
      Task_description: "",
      Emp_id: "",
      Assigned_to: "",
      Status_id: "",
      Developer_notes: "",
    });
  }
  editClickTask(tsk) {
    this.setState({
      modalTitle: "Edit Tasks",
      Task_ID: tsk.Task_ID,
      ProjectName: tsk.ProjectName,
      Task_description: tsk.Task_description,
      Emp_id: tsk.Emp_id,
      Assigned_to: tsk.Assigned_to,
      Status_id: tsk.Status_id,
      Developer_notes: tsk.Developer_notes,
    });
  }
  createClickTask() {
    fetch(variables.API_URL + `Tasks`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Task_ID: this.state.Task_ID,
        ProjectName: this.state.ProjectName,
        Task_description: this.state.Task_description,
        Emp_id: this.state.Emp_id,
        Assigned_to: this.state.Assigned_to,
        Status_id: this.state.Status_id,
        Developer_notes: this.state.Developer_notes,
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
  updateClickTask() {
    fetch(variables.API_URL + `Tasks`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Task_ID: this.state.Task_ID,
        ProjectName: this.state.ProjectName,
        Task_description: this.state.Task_description,
        Emp_id: this.state.Emp_id,
        Assigned_to: this.state.Assigned_to,
        Status_id: this.state.Status_id,
        Developer_notes: this.state.Developer_notes,
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
  deleteClickTask(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + `Tasks/` + id, {
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

  // cellrenderStatus(value) {
  //   if (value == "done") {
  //     return yellow;
  //   } else if (value == "pending") {
  //     return;
  //   } else {
  //   }
  // }

  render() {
    console.log(this.props);
    const {
      Task_ID,
      TasksArry,
      ProjectName,
      modalTitle,
      Task_description,
      Emp_id,
      Assigned_to,
      Status_id,
      Developer_notes,
      empployees,
    } = this.state;
    return (
      <div>
        {" "}
        <Card className="card cardmobile" style={{ borderRadius: 10 }}>
          <Typography align="left">
            <button
              type="button"
              className="btn float-end"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
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
              onClick={() => this.addClickTask()}
            >
              <AddIcon style={{ marginRight: "10px", marginLeft: "-15px" }} />
              Add new Task
            </button>
            {/* </Button>{" "} */}
          </Typography>
          <div className="table-responsive-sm">
            <table
              className="table table-striped table-hover table-bordered  table-sm"
              style={{ marginLeft: 15, marginRight: 0 }}
            >
              <thead className="thead-dark ">
                <tr className="table-primary ">
                  <th>Task_ID</th>
                  <th> ProjectName</th>
                  <th>Task_description</th>
                  <th>Emp_id</th>
                  <th>Assigned_to</th>
                  <th>Status_id</th>
                  <th>Developer_notes</th>
                  <th>Status</th>
                  <th style={{ textAlign: "center" }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {TasksArry.map((tsk) => (
                  <tr key={tsk.Task_ID}>
                    <td>{tsk.Task_ID}</td>
                    <td>{tsk.ProjectName}</td>
                    <td>{tsk.Task_description}</td>
                    <td>{tsk.Emp_id} </td>
                    <td>{tsk.Assigned_to}</td>
                    <td>{tsk.Status_id} </td>
                    <td>{tsk.Developer_notes} </td>
                    <td>{tsk.Status} </td>

                    <td style={{ display: "flex" }}>
                      <button
                        type="button"
                        className="btn-info mr-1 btnupdate"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        onClick={() => this.editClickTask(tsk)}
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
                        // className="btn btn-light mr-1"
                        className="btn-danger mr-1 btndelete"
                        onClick={() => this.deleteClickTask(tsk.Task_ID)}
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
              id="exampleModal2"
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
                            value={Task_description}
                            onChange={this.changeTask_description}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">Emp_id</span>
                          <input
                            type="text"
                            className="form-control"
                            value={Emp_id}
                            onChange={this.changeEmp_id}
                          />

                          <span className="input-group-text">AssignTo</span>
                          <select
                            type="text"
                            className="form-select"
                            value={Assigned_to}
                            onChange={this.changeAssigned_to}
                          >
                            {empployees.map((emp) => (
                              <option key={emp.Emp_id}>
                                {emp.EmpFist_Name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">Status_id</span>
                          <input
                            type="text"
                            className="form-select"
                            value={Status_id}
                            onChange={this.changeStatus_id}
                          />
                          <span className="input-group-text">
                            Developer_notes
                          </span>
                          <input
                            type="text"
                            className="form-select"
                            value={Developer_notes}
                            onChange={this.changeDeveloper_notes}
                          />
                        </div>
                      </div>
                    </div>

                    {Task_ID == 0 ? (
                      <button
                        type="button"
                        className="btn btn-primary float-start"
                        onClick={() => this.createClickTask()}
                      >
                        Create
                      </button>
                    ) : null}

                    {Task_ID != 0 ? (
                      <button
                        type="button"
                        className="btn btn-primary float-start"
                        onClick={() => this.updateClickTask()}
                      >
                        Update
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}
        </Card>
      </div>
    );
  }
}
