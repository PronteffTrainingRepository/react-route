import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import T1 from "../topics/T1";
import T2 from "../topics/T2";
import T3 from "../topics/T3";

class Topics extends Component {
  render() {
    const { match } = this.props;
    console.log(match.path);
    return (
      <div>
        <h1>Topic Lists</h1>
        <ul>
          <li key={`${T1}`}>
            <Link to='/topics/T1'>t1</Link>
          </li>
          <li key={`${T2}`}>
            <Link to={`${match.url}/T2`}>t2</Link>
          </li>
          <li key={`${T3}`}>
            <Link to={`${match.url}/T3`}>t3</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/T1" component={T1} />
          <Route exact path="/T2" component={T2} />
          <Route exact path="/T3" component={T3} />
        </Switch>
      </div>
    );
  }
}

export default Topics;
