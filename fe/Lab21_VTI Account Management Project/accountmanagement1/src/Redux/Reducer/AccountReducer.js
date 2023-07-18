/** @format */

import { DELETE_ACCOUNT, FETCH_ACCOUNT_LIST } from "../Contants/ActionType";

let initialState = [];

let accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_LIST:
      let listAccountAPI = action.payload;
      return listAccountAPI;
    case DELETE_ACCOUNT:
      //   console.log("payload: ", action.payload);
      let idDelete = action.payload;
      let listAccountState = state;
      let indexDelete = listAccountState.findIndex((account) => account.id === idDelete);
      listAccountState.splice(indexDelete, 1);

      return listAccountState;
    default:
      return [...state];
  }
};

export default accountReducer;
