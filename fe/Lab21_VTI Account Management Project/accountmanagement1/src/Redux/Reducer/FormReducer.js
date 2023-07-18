/** @format */

import { CLOSE_FORM, SHOW_FORM } from "../Contants/ActionType";

let initialState = false;

let formreducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return true;
    case CLOSE_FORM:
      return false;
    default:
      return state;
  }
};

export default formreducer;
