import {
  Box,
  Button,
  Card,
  CardHeader,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CssFiles/custom.css";

import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { variables } from "../../variables";

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

export default class ContactEmployee extends Component {
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
  };
  //

  refreshList() {
    fetch(variables.API_URL + `EmployeeDetails`)
      .then((response) => response.json())
      .then((emp) => {
        this.setState({ emplist: emp });
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
      <div className="responsive">
        <Card
          className="card"
          style={{
            borderRadius: 20,
            marginLeft: 40,
            marginRight: 40,
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
        <Card
          className="card"
          style={{ borderRadius: 20, marginLeft: 40, marginRight: 40 }}
        >
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

                  {/* <th>comapny_role</th> */}
                  <th>SkypeId</th>
                  <th>Whatsapp</th>
                  <th>Company_Email</th>
                  <th>Personal_Email</th>
                </tr>
              </thead>
              <tbody>
                {emplist.map((emp) => (
                  <tr key={emp.Emp_id}>
                    <td>{emp.Emp_id}</td>
                    <td>{emp.EmpFist_Name}</td>
                    <td>{emp.EmpLast_Namec}</td>
                    {/* <td>{emp.comapny_role}</td> */}
                    <td>{emp.SkypeId}</td>
                    <td>{emp.Whatsapp} </td>
                    <td>{emp.Company_Email} </td>
                    <td>{emp.Personal_Email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* </Card> */}
        </Card>
      </div>
    );
  }
}
