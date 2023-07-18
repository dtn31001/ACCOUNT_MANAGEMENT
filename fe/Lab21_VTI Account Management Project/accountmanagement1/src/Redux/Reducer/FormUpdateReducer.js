/** @format */

import { TOGLE_FORM_UPATE, FETCH_ACCOUNT_UPDATE_INFO } from "../Contants/ActionType";

var initialState = {
  isShowFormUpdate: false,
  accountUpdateInfo: {},
};

const FormUpdate = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_FORM_UPATE:
      return {
        ...state,
        isShowFormUpdate: !state.isShowFormUpdate,
      };
    case FETCH_ACCOUNT_UPDATE_INFO:
      return {
        ...state,
        accountUpdateInfo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default FormUpdate;
