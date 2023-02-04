import { Card } from "@mui/material";
import React, { Component } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import App from "./App";
import ContactEmployee from "./Components/pages/ContactEmployee";
import Dashboard from "./Dashboard";
import EventCalender from "./Components/pages/EventCalender";
import { createBrowserHistory } from "history";
import "./Components/CssFiles/custom.css";
import { variables } from "./variables";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: "",
      Auth_role: "",
      EmpFist_Name: "",
      Emp_id: "",
      EmpDetails: [],
    };
  }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("https://localhost:44325/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         UserName: this.state.UserName,
  //         Password: this.state.Password,
  //       }),
  //     })

  //     if (Employee !== null) {
  //       console.log("valid username or password");
  //     } else {
  //       console.log("Invalid username or password");
  //       // Handle unsuccessful login
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  createClick() {
    fetch(variables.API_URL + `login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: this.state.UserName,
        Password: this.state.Password,
      }),
    })
      .then((res) => res.json())
      .then((emp) => {
        this.setState({ EmpDetails: emp });
        console.log("details", this.state.EmpDetails);
        console.log(this.state.EmpDetails[0].Auth_role);
        if (this.state.EmpDetails.length == 1) {
          sessionStorage.setItem(
            "UserType",
            this.state.EmpDetails[0].Auth_role
          );
          sessionStorage.setItem("UserName", this.state.EmpDetails[0].UserName);
          sessionStorage.setItem("Emp_id", this.state.EmpDetails[0].Emp_id);
          sessionStorage.setItem(
            "EmpFist_Name",
            this.state.EmpDetails[0].EmpFist_Name
          );
          location.reload();
        } else if (this.state.EmpDetails[0].EmpFist_Name == "") {
          alert("login Failed");
        } else this.createClick();
      });

    // if (this.state.UserName !== null) {
    //   sessionStorage.setItem("UserType", this.state.Auth_role);
    //   sessionStorage.setItem("UserName", this.state.UserName);
    //   sessionStorage.setItem("Emp_id", this.state.Emp_id);
    //   sessionStorage.setItem("EmpFist_Name", this.state.EmpFist_Name);
    //   location.reload();
    // } else {
    //   alert("login Failed");
    //}
  }

  // fetch(`https://localhost:44325/api/EmployeeDetails`)
  // .then((response) => response.json())
  // .then((emp) => {
  //   this.setState({ emplist: emp });
  // });
  //     .then(
  //       (result) => {
  //         alert(result);
  //         this.refreshList();
  //       },
  //       (error) => {
  //         alert("Failed");
  //       }
  //     );
  // }
  // if (d.Employee !== null) {
  //   localStorage.setItem("username", this.state.username)
  //   localStorage.setItem("dlh", btoa(this.state.password))
  //   if (navigator.onLine) {
  //     this.GETuserDetails(d.Employee.EmployeeNo)
  //   } else {
  //     localStorage.setItem("user", JSON.stringify(d.Employee))
  //     location.reload()
  //   }
  // } else {
  //   this.setState({
  //     errMsg: d.ReturnMessage[0]

  //   })
  // }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  changePassword = (e) => {
    this.setState({ Password: e.target.value });
  };
  changeUserName = (e) => {
    this.setState({ UserName: e.target.value });
  };

  render() {
    const { Auth_role, EmpDetails } = this.state;
    return (
      <div className="loginbackground">
        <Card
          className="logincard"
          style={{
            backgroundColor: " rgba(255, 255, 255, .15)",
            backdropFilter: "blur(1px)",
            boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .8)",
            zIndex: 9999,
            borderRadius: "20px",
          }}
        >
          <h2 className="welcometxt">EMPLOYEE MANAGEMENT </h2>
          <h2 className="logintxt">SIGN IN </h2>
          {/* <BrowserRouter>
          <Routes>
            <Route
              path="/Employee/Contact"
              render={(props) => <ContactEmployee {...props} />}
            />
            <Route path="/EventCalander" element={<EventCalender />} />
          </Routes>
        </BrowserRouter> */}
          <div
            className="m-4 logincard"
            style={{
              alignItems: "Block",
              display: "Block",
              marginTop: "40px",
              width: 300,
            }}
          >
            <div className="col-6 lgninputgroup">
              <div className="input-group ">
                <span className="input-group-text">
                  <PersonOutlineIcon />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={this.state.UserName}
                  onChange={this.changeUserName}
                />
              </div>
            </div>
            <div className="col-6 lgninputgroup">
              <div className="input-group">
                <span className="input-group-text">
                  <PersonOutlineIcon />
                </span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.Password}
                  onChange={this.changePassword}
                />
              </div>
            </div>
          </div>
          {/* <button type="submit" onClick={this.handleSubmit}>
          Login
        </button> */}

          <button
            type="submit"
            onClick={() => this.createClick()}
            className="loginbtn"
          >
            SIGN IN
          </button>
        </Card>
      </div>
    );
  }
}

export default Login;
