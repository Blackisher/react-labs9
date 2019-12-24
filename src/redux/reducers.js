import {
  EMPLOYEES_LOADED,
  WORKER_ADDED,
  LAUNCH_DATA_FETCHING,
  DATA_FETCHING_ERROR
} from "./constants";

export const initialState = {
  loadedOnce: false,
  errorInfo: null,
  loading: false,
  employees: []
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      return { ...state, employees, loadedOnce: true, loading: false };
    }
    case WORKER_ADDED: {
      const { worker } = action.payload;
      const tmp = [...state.employees, worker];
      return { ...state, employees: tmp };
    }
    case LAUNCH_DATA_FETCHING: {
      return { ...state, isLoading: true, errorInfo: null };
    }
    case DATA_FETCHING_ERROR: {
      const errorInfo = action.payload.error;
      return { ...state, isLoading: false, errorInfo, employees: [] };
    }
    default:
      return state;
  }
};

export default appReducer;
