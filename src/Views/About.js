import React, { Component } from "react";


class About extends Component {
  render() {
    const { match } = this.props;
    console.log(match.path);
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
