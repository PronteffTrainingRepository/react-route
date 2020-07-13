import React, { Component } from "react";
import { Link } from "react-router-dom";
import Topics from "../Views/Topics";

export class T1 extends Component {
  render() {
    return (
      <div>
        <h1>T1 data</h1>
        <Link to={"/Topics"}>Back to topics</Link>
      </div>
    );
  }
}

export default T1;
