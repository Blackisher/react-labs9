import EMPLOYEES_LOADED from "./constants";

const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export { employeesLoaded as default };
