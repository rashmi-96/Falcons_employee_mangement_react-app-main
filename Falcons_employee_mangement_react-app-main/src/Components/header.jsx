import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import "./CssFiles/custom.css";
import { Component } from "react";
// import { Link } from "react-router-dom";

const pages = [""];
const settings = ["Profile", "Logout"];

export default class ResponsiveAppBar extends Component {
  state = {
    //navwidth: 0,
  };

  // openNav = (id) => {
  //   this.setState({
  //     navwidth: "130px",
  //   });
  //   console.log(id);
  // };

  // closeNav = () => {
  //   this.setState({
  //     navwidth: "0px",
  //   });
  // };

  render() {
    return (
      <AppBar
        position="static"
        style={{
          position: "fixed",
          zIndex: 99,
          marginTop: -10,
          top: 0,
          height: "60px",
        }}
      >
        <Container className="headertopbar" maxWidth="xxl">
          <Toolbar
            className="headertopbar"
            disableGutters
            style={{ height: "90px" }}
          >
            <Typography
              sx={{ color: "white", weight: 4, type: "bold", fontSize: "20px" }}
            >
              EMPLOYEE MANAGEMENT
            </Typography>
            {/* <div style={{ width: 60 }}>
              <Tooltip title="click here">
                <button
                  className="openbtn"
                  onMouseEnter={this.openNav}
                  // onMouseLeave={this.closeNav}
                >
                  User
                </button>
              </Tooltip>

              <div
                id="mySidenav"
                className="sidepanel"
                style={{ width: this.state.navwidth }}
              >
                <Tooltip title="close">
                  <a
                    className="closebtn"
                    onClick={this.closeNav}
                    style={{ marginBottom: 10, marginTop: -10 }}
                  >
                    &times;{" "}
                  </a>
                </Tooltip>
                {/* <Link to="/login"> */}
            {/* <Tooltip title="logout">
                  <button
                    className="closebtn"
                    onClick={this.closeNav}
                    style={{ marginBottom: 10, marginTop: 30 }}
                  >
                    logout
                  </button> */}
            {/* </Tooltip> */}
            {/* </Link> */}
            {/* </div>
            </div> */}{" "}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
