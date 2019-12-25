import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.loginChanged = this.loginChanged.bind(this);

    this.state = {
      login: ""
    };
  }

  loginChanged(e) {
    this.setState({ login: e.target.value });
  }

  render() {
    return (
      <>
        <h1>Login Page:</h1>
        <h4>Login:</h4>
        <input
          type="text"
          value={this.state.login}
          onChange={this.loginChanged}
        />
      </>
    );
  }
}

export default connect(null, null)(withRouter(Login));
