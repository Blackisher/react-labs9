import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { loggedIn } from "../redux/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.loginChanged = this.loginChanged.bind(this);
    this.checkLogin = this.checkLogin.bind(this);

    this.state = {
      login: ""
    };
  }

  loginChanged(e) {
    this.setState({ login: e.target.value });
  }

  checkLogin() {
    return fetch("http://localhost:3004/users")
      .then(data => data.json())
      .then(json => {
        json.map(user => {
          if (user.username === this.state.login) {
            this.props.whoLoggedIn(user);
            this.props.history.push("/list");
          }
        });
      });
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
        <button type="submit" onClick={this.checkLogin}>
          Button for login
        </button>
      </>
    );
  }
}

const mapStateToProps = (state /* , ownProps */) => {
  return {
    login: state
  };
};

const mapDispatchToProps = dispatch => ({
  whoLoggedIn: login => dispatch(loggedIn(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
