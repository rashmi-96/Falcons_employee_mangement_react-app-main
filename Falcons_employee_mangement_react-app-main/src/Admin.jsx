import React from "react";
import { Link } from "react-router-dom";
import Users from "./Users";

const Admin = () => {
  return (
    <section>
      <h1>
        <br>
          <Users />
        </br>
        <div>
          <Link to="/">Home</Link>
        </div>
      </h1>
    </section>
  );
};

export default Admin;
