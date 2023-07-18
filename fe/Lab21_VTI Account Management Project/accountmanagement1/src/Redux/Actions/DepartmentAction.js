/** @format */

import { getListDepartmentAPI } from "../../API/DepartmentAPI";
import { FETCH_DEPARTMENT_LIST } from "../Contants/ActionType";

export const actionFetchListDepartmentAPI = () => {
  return (dispatch) => {
    return getListDepartmentAPI().then((response) => {
      //  console.log("reponseAPI:", response);
      dispatch(actionFetchListDepartmentRedux(response));
    });
  };
};

export const actionFetchListDepartmentRedux = (listDepartment) => {
  return {
    type: FETCH_DEPARTMENT_LIST,
    payload: listDepartment,
  };
};
