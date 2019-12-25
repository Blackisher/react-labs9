import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { employeesLoaded, fetchEmployees } from "../redux/actions";

const EmployeeLine = ({ employee }) => (
  <div>
    {employee.name} ({employee.age} yrs old): {employee.company}
  </div>
);

class PageEmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.employeesLoading();
  }

  render() {
    const { error, isLoading, employees, login } = this.props;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    if (error) {
      return <>{error.message}</>;
    }

    return (
      <div>
        {login && (
          <div style={{ float: "right", color: "red" }}>{login.full_name}</div>
        )}
        <h1>Employees List:</h1>
        {employees &&
          employees.map(employee => (
            <EmployeeLine key={employee._id} employee={employee} />
          ))}
        <Link to="/new">
          <button type="submit">Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /* , ownProps */) => {
  return {
    loadedOnce: state.loadedOnce,
    isloading: state.isloading,
    error: state.error,
    login: state.login,
    employees: state.employees
  };
};

const mapDispatchToProps = dispatch => ({
  employeesLoaded: employees => dispatch(employeesLoaded(employees)),
  employeesLoading: () => dispatch(fetchEmployees())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageEmployeesList);
