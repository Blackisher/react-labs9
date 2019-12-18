import { EMPLOYEES_LOADED, WORKER_ADDED } from "./constants";

export const initialState = {
  loadedOnce: false,
  employees: []
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      return { ...state, employees, loadedOnce: true };
    }
    case WORKER_ADDED: {
      const { worker } = action.payload;
      const tmp = [...state.employees, worker];
      return { ...state, employees: tmp };
    }
    default:
      return state;
  }
};

export default appReducer;
