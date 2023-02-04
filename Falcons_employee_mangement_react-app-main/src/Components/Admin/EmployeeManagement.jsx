import {
  Box,
  Button,
  Card,
  CardHeader,
  Tooltip,
  Typography,
} from "@mui/material";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../CssFiles/custom.css";
// import EmpDetails from "./subcomponents/EmployeeManagemntView/AddEmpIyooInput";
// import EmpDetailsUpdate from "./subcomponents/EmployeeManagemntView/UpdateEmployee";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { variables } from "../../variables";
import "./../CssFiles/custom.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 2.7,
  boxShadow: 24,
  p: 4,
};

export default class EmployeeManagement extends Component {
  state = {
    emplist: [],
    Emp_id: 0,
    EmpFist_Name: "",
    EmpLast_Namec: "",
    Auth_role: "",
    comapny_role: "",
    Contract_type: "",
    Joined_Date: "",
    Note: "",
    SkypeId: "",
    Whatsapp: "",
    Company_Email: "",
    Personal_Email: "",
    UserName: "",
    Password: "",
    AuthRoles: [],
    Employeeroles: [],
    modalTitle: "",
  };
  //

  refreshList() {
    fetch(variables.API_URL + `EmployeeDetails`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({ emplist: emp });
      });
    fetch(variables.API_URL + `AuthRole`)
      .then((response) => response.json())
      .then((auth) => {
        this.setState({ AuthRoles: auth });
      });
    fetch(variables.API_URL + `Employeerole`)
      .then((response) => response.json())
      .then((role) => {
        this.setState({ Employeeroles: role });
      });
  }
  //
  //begin
  componentDidMount = () => {
    this.refreshList();
  };

  //end

  //

  //
  changeEmpfirstName = (e) => {
    this.setState({ EmpFist_Name: e.target.value });
  };
  changeEmpLast_Namec = (e) => {
    this.setState({ EmpLast_Namec: e.target.value });
  };
  changeAuth_role = (e) => {
    this.setState({ Auth_role: e.target.value });
  };
  changecomapny_role = (e) => {
    this.setState({ comapny_role: e.target.value });
  };
  changeContract_type = (e) => {
    this.setState({ Contract_type: e.target.value });
  };
  changeJoined_Date = (e) => {
    this.setState({ Joined_Date: e.target.value });
  };
  changeSkypeId = (e) => {
    this.setState({ SkypeId: e.target.value });
  };
  changeWhatsapp = (e) => {
    this.setState({ Whatsapp: e.target.value });
  };
  changeCompany_Email = (e) => {
    this.setState({ Company_Email: e.target.value });
  };
  changePersonal_Email = (e) => {
    this.setState({ Personal_Email: e.target.value });
  };
  changeUserName = (e) => {
    this.setState({ UserName: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ Password: e.target.value });
  };
  changeNote = (e) => {
    this.setState({ Note: e.target.value });
  };
  changeEmpid = (e) => {
    this.setState({ Emp_id: e.target.Emp_id });
  };

  //delete click
  addClick() {
    this.setState({
      modalTitle: "Add Employee",
      Emp_id: 0,
      EmpFist_Name: "",
      EmpLast_Namec: "",
      Auth_role: "",
      comapny_role: "",
      Contract_type: "",
      Joined_Date: "",
      SkypeId: "",
      Whatsapp: "",
      Company_Email: "",
      Personal_Email: "",
      UserName: "",
      Password: "",
      Note: "",
    });
  }
  editClick(emp) {
    this.setState({
      modalTitle: "Edit Employee",
      Emp_id: emp.Emp_id,
      EmpFist_Name: emp.EmpFist_Name,
      EmpLast_Namec: emp.EmpLast_Namec,
      Auth_role: emp.Auth_role,
      comapny_role: emp.comapny_role,
      Contract_type: emp.Contract_type,
      Joined_Date: emp.Joined_Date,
      SkypeId: emp.SkypeId,
      Whatsapp: emp.Whatsapp,
      Company_Email: emp.Company_Email,
      Personal_Email: emp.Personal_Email,
      UserName: emp.UserName,
      Password: emp.Password,
      Note: emp.Note,
    });
  }

  createClick() {
    fetch(variables.API_URL + `EmployeeDetails`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmpFist_Name: this.state.EmpFist_Name,
        EmpLast_Namec: this.state.EmpLast_Namec,
        Auth_role: this.state.Auth_role,
        comapny_role: this.state.comapny_role,
        Contract_type: this.state.Contract_type,
        Joined_Date: this.state.Joined_Date,
        SkypeId: this.state.SkypeId,
        Whatsapp: this.state.Whatsapp,
        Company_Email: this.state.Company_Email,
        Personal_Email: this.state.Personal_Email,
        UserName: this.state.UserName,
        Password: this.state.Password,
        Note: this.state.Note,
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
      fetch(variables.API_URL + `EmployeeDetails/` + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          () => {
            alert("successfull deleted");
            this.refreshList();
          },
          (error) => {
            alert("done");
          }
        );
    }
  }
  updateClick() {
    fetch(variables.API_URL + `EmployeeDetails`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Emp_id: this.state.Emp_id,
        EmpFist_Name: this.state.EmpFist_Name,
        EmpLast_Namec: this.state.EmpLast_Namec,
        Auth_role: this.state.Auth_role,
        comapny_role: this.state.comapny_role,
        Contract_type: this.state.Contract_type,
        Joined_Date: this.state.Joined_Date,
        SkypeId: this.state.SkypeId,
        Whatsapp: this.state.Whatsapp,
        Company_Email: this.state.Company_Email,
        Personal_Email: this.state.Personal_Email,
        UserName: this.state.UserName,
        Password: this.state.Password,
        Note: this.state.Note,
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

  //delete click end
  //

  //
  //
  formatDate(dateValue) {
    dateValue = new Date(dateValue).toLocaleDateString("en-AU");

    return dateValue;
  }
  //

  // ready(table) {
  //   var table = DataTable("#example");
  //   return table;
  // }

  //   $(document).ready(function() {
  //     $('#example').DataTable();
  // }

  ready() {
    DataTable("example");
  }

  render() {
    const {
      emplist,
      AuthRoles,
      Employeeroles,
      modalTitle,
      Emp_id,
      EmpFist_Name,
      EmpLast_Namec,
      Auth_role,
      comapny_role,
      Contract_type,
      Joined_Date,
      SkypeId,
      Note,
      Whatsapp,
      Company_Email,
      Personal_Email,
      UserName,
      Password,
    } = this.state;

    return (
      <div className="responsive ">
        <Card
          className="card  cardmobile"
          style={{
            borderRadius: 20,
            marginTop: 100,
          }}
        >
          <CardHeader
            title={
              <Typography className="cardHeader">
                Employee Management{" "}
              </Typography>
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
              <ArrowBackIcon className="backicon" />
              Back
            </Button>
          </Link>
        </Card>
        <Card className="card cardmobile" style={{ borderRadius: 10 }}>
          <div>
            <br></br>
          </div>
          <div>
            <Typography align="right">
              <Button>
                <Tooltip title="refresh list">
                  <RefreshIcon
                    onClick={() => {
                      this.refreshList();
                    }}
                  />
                </Tooltip>
              </Button>

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
            </Typography>
          </div>

          {/* <Card className="card"> */}
          <div className="table-responsive-sm">
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
                  <th> Fist_Name</th>
                  <th>Last_Name</th>
                  <th>Auth_role</th>
                  {/* <th>comapny_role</th> */}
                  <th>Contract_type</th>
                  <th>Note</th>
                  <th>Joined_Date</th>
                  {/* <th>SkypeId</th> */}
                  <th>Whatsapp</th>
                  <th>Company_Email</th>
                  {/* <th>Personal_Email</th> */}
                  <th>UserName</th>
                  <th>Password</th>
                  <th style={{ textAlign: "center" }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {emplist.map((emp) => (
                  <tr key={emp.Emp_id}>
                    <td>{emp.Emp_id}</td>
                    <td>{emp.EmpFist_Name}</td>
                    <td>{emp.EmpLast_Namec}</td>
                    <td>{emp.Auth_role}</td>
                    {/* <td>{emp.comapny_role}</td> */}
                    <td>{emp.Contract_type} </td>
                    <td>{emp.Note} </td>
                    <td>{this.formatDate(emp.Joined_Date)} </td>
                    {/* <td>{emp.SkypeId}</td> */}
                    <td>{emp.Whatsapp} </td>
                    <td>{emp.Company_Email} </td>
                    {/* <td>{emp.Personal_Email}</td> */}
                    <td>{emp.UserName} </td>
                    <td>{emp.Password}</td>
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
                        onClick={() => this.deleteClick(emp.Emp_id)}
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
                            <span className="input-group-text">First Name</span>
                            <input
                              type="text"
                              className="form-control"
                              value={EmpFist_Name}
                              onChange={this.changeEmpfirstName}
                            />
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">Last Name</span>
                            <input
                              type="text"
                              className="form-control"
                              value={EmpLast_Namec}
                              onChange={this.changeEmpLast_Namec}
                            />
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              Employee Role
                            </span>
                            <select
                              type="text"
                              className="form-select"
                              value={comapny_role}
                              onChange={this.changecomapny_role}
                            >
                              {Employeeroles.map((emp) => (
                                <option key={emp.CompanyRole_id}>
                                  {emp.C_Role}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">Auth Role</span>
                            <select
                              type="text"
                              className="form-select"
                              value={Auth_role}
                              onChange={this.changeAuth_role}
                            >
                              {AuthRoles.map((emp) => (
                                <option key={emp.Auth_id}>
                                  {emp.Auth_role}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              Contract_type
                            </span>
                            <input
                              type="text"
                              className="form-select"
                              value={Contract_type}
                              onChange={this.changeContract_type}
                            />
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">Note</span>
                            <input
                              type="text"
                              className="form-select"
                              value={Note}
                              onChange={this.changeNote}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              Joined_Date{" "}
                            </span>
                            <input
                              type="date"
                              className="form-control"
                              value={Joined_Date}
                              onChange={this.changeJoined_Date}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">SkypeId</span>
                            <input
                              type="text"
                              className="form-control"
                              value={SkypeId}
                              onChange={this.changeSkypeId}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">Whatsapp</span>
                            <input
                              type="text"
                              className="form-control"
                              value={Whatsapp}
                              onChange={this.changeWhatsapp}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              {" "}
                              Company_Email
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              value={Company_Email}
                              onChange={this.changeCompany_Email}
                            />
                          </div>
                        </div>

                        <div cclassName="col-6">
                          <div className="input-group">
                            <span className="input-group-text">
                              Personal_Email
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              value={Personal_Email}
                              onChange={this.changePersonal_Email}
                            />
                          </div>
                        </div>

                        <div cclassName="col-6">
                          <div className="input-group">
                            <span className="input-group-text"> UserName</span>
                            <input
                              type="text"
                              className="form-control"
                              value={UserName}
                              onChange={this.changeUserName}
                            />
                          </div>
                        </div>

                        <div cclassName="col-6">
                          <div className="input-group">
                            <span className="input-group-text"> password</span>
                            <input
                              type="password"
                              className="form-control"
                              value={Password}
                              onChange={this.changePassword}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    ;
                    {Emp_id == 0 ? (
                      <button
                        type="button"
                        className="btn btn-primary float-start"
                        onClick={() => this.createClick()}
                      >
                        Create
                      </button>
                    ) : null}
                    {Emp_id != 0 ? (
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
          {/* </Card> */}
        </Card>
      </div>
    );
  }
}
