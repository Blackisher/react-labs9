import { EMPLOYEES_LOADED, WORKER_ADDED } from "./constants";

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

export { employeesLoaded, workerAdded };
