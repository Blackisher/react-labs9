import { EMPLOYEES_LOADED, WORKER_ADDED } from "./constants";

export const initialState = {
  worker: [],
  employees: []
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      // return Object.assign({}, state, { employees });
      return { ...state, employees };
    }
    case WORKER_ADDED: {
      const { worker } = action.payload;
      return { ...state, worker };
    }
    default:
      return state;
  }
};

export default appReducer;
