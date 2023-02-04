import { Button, Card, CardHeader, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import { variables } from "../../variables";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class employeeTasks extends Component {
  state = {
    MyTask: [],
    Emp_id: 0,
    EmpFist_Name: "",
    ProjectName: "",
    Task_description: "",
    Tasks: "",
    Status: "",
    Developer_notes: "",
    Status_id: "",
    Task_ID: "",
  };

  refreshList() {
    fetch(variables.API_URL + `MyTask?emp_id=${this.state.Emp_id}`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({ MyTask: emp, Task_ID: emp[0].Task_ID });
        console.log(emp);
      });
    // sessionStorage.getItem("Emp_id");
    this.state.Emp_id = sessionStorage.getItem("Emp_id");
    // this.state.EmpFist_Name = sessionStorage.getItem("EmpFist_Name");
  }

  //
  //begin
  componentDidMount = () => {
    this.refreshList();
  };

  updateClick() {
    fetch(variables.API_URL + `MyTask`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Emp_id: parseInt(this.state.Emp_id),
        Developer_notes: this.state.Developer_notes,
        // Status_id: parseInt(this.state.Status_id),
        Task_ID: parseInt(this.state.Task_ID),
        Status: this.state.Status,
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

  changeDeveloper_notes = (e) => {
    this.setState({ Developer_notes: e.target.value });
  };
  changeStatus_id = (e) => {
    this.setState({ Status_id: e.target.value });
  };
  changeTask_ID = (e) => {
    this.setState({ Task_ID: e.target.value });
  };
  changeStatus = (e) => {
    this.setState({ Status: e.target.value });
  };

  render() {
    this.state.EmpFist_Name = sessionStorage.getItem("EmpFist_Name");
    this.state.Emp_id = sessionStorage.getItem("Emp_id");
    const {
      MyTask,
      Emp_id,
      Status_id,
      Task_ID,
      ProjectName,
      Task_description,
      Tasks,
      Status,
      Developer_notes,
    } = this.state;
    return (
      <div>
        <Card className="card">
          <CardHeader
            title={<Typography className="cardHeader">My Tasks </Typography>}
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
        </Card>
        <Card className="card">
          <h1
            style={{
              fontSize: 29,
              color: "black",
              fontFamily: "monospace",
              marginTop: "30px",
              marginLeft: "20px",
            }}
          >
            {" "}
            Hi , {this.state.EmpFist_Name}
          </h1>
          <br></br>
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
                  <th>ProjectName</th>
                  <th>Task_ID</th>
                  <th>Task_description</th>
                  <th>Developer_notes</th>
                  <th>Status</th>

                  {/* <th>total_hours_time</th> */}
                </tr>
              </thead>
              <tbody>
                {MyTask.map((emp) => (
                  <tr key={emp.Emp_id}>
                    <td>{emp.ProjectName}</td>
                    <td>{emp.Task_ID}</td>
                    <td>{emp.Task_description} </td>
                    <td>{emp.Developer_notes}</td>
                    <td>{emp.Status} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                MY UPDATES
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
                    {/* <span className="input-group-text">Status id</span>
                    <input
                      type="number"
                      className="form-control"
                      value={Status_id}
                      onChange={this.changeStatus_id}
                    /> */}
                    <span className="input-group-text">Task id</span>
                    <input
                      type="number"
                      className="form-control"
                      value={Task_ID}
                      onChange={this.changeTask_ID}
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
                    <span className="input-group-text">Developer Notes</span>
                    <input
                      type="text"
                      className="form-control"
                      value={Developer_notes}
                      onChange={this.changeDeveloper_notes}
                    />

                    <button
                      type="button"
                      className="btn btn-primary float-start"
                      onClick={() => this.updateClick()}
                    >
                      Update
                    </button>

                    {/* <span className="input-group-text">Last Name</span>
                  <input
                    type="text"
                    className="form-control"
                    // value={EmpLast_Namec}
                    // onChange={this.changeEmpLast_Namec}
                  /> */}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Card>
      </div>
    );
  }
}

// export class EmployeeProps extends Component {
//   state = {};
//   render() {
//     console.log("t", this.props);
//     return (
//       <div>
//         <h1 style={{ color: "black" }}></h1>

//       </div>
//     );
//   }
// }
