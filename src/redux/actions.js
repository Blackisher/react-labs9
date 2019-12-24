import {
  EMPLOYEES_LOADED,
  WORKER_ADDED,
  DATA_FETCHING_ERROR,
  LAUNCH_DATA_FETCHING
} from "./constants";

const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

const workerAdded = worker => {
  return {
    type: WORKER_ADDED,
    payload: {
      worker
    }
  };
};

const employeesLoading = () => {
  return {
    type: LAUNCH_DATA_FETCHING
  };
};

const employeesLoadError = error => {
  return {
    type: DATA_FETCHING_ERROR,
    payload: {
      error
    }
  };
};

function fetchData() {
  return fetch("http://localhost:3004/employees").then(data => data.json());
}

function fetchEmployees() {
  return dispatch => {
    dispatch(employeesLoading());
    return fetchData()
      .then(json => {
        dispatch(employeesLoaded(json));
        return json;
      })
      .catch(error => dispatch(employeesLoadError(error)));
  };
}

export {
  employeesLoaded,
  workerAdded,
  employeesLoading,
  employeesLoadError,
  fetchEmployees
};
