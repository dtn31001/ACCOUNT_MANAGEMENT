/** @format */

import { getListPositionAPI } from "../../API/PositionAPI";
import { FETCH_POSITION_LIST } from "../Contants/ActionType";

export const actionFetchListPositionAPI = () => {
  return (dispatch) => {
    return getListPositionAPI().then((response) => {
      //  console.log("reponseAPI:", response);
      dispatch(actionFetchListPositionRedux(response));
    });
  };
};
export const actionFetchListPositionRedux = (listPosition) => {
  return {
    type: FETCH_POSITION_LIST,
    payload: listPosition,
  };
};
