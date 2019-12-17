import { EMPLOYEES_LOADED, WORKER_ADDED } from "./constants";

export const initialState = {
  worker: [],
  employees: []
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (obj = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { workers } = action.payload;
      initialState.employees = workers;
      const forDebug = Object.assign({}, obj, { workers });
      return forDebug;
    }
    case WORKER_ADDED: {
      const { worker } = action.payload;
      const forDebug = Object.assign({}, obj, { ...obj.employees, worker });
      return forDebug;
      // return { ...obj, employees: { ...obj.employees, worker } };
    }
    default:
      return obj;
  }
};

export default appReducer;
