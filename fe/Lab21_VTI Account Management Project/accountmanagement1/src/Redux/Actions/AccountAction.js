/** @format */

//ac call api, dua du lieu vao listaccount redux

import { addAccountNewAPI, getListAccountAPI, deleteAccountAPI, updateAccountAPI } from "../../API/AccountApi";
import { DELETE_ACCOUNT, FETCH_ACCOUNT_LIST, SEARCH_ACCOUNT } from "../Contants/ActionType";

export let actionFetchListAccountAPI = () => {
  return (dispatch) => {
    return getListAccountAPI().then((listAccountAPI) => {
      dispatch(actionFetchListAccountRedux(listAccountAPI));
    });
  };
};

//khai bao action:FETCH_ACCOUNT_LIST
export let actionFetchListAccountRedux = (listAccountAPI) => {
  return {
    type: FETCH_ACCOUNT_LIST,
    payload: listAccountAPI,
  };
};
//search account
export let searchAccount = (newFilters) => {
  return {
    type: SEARCH_ACCOUNT,
    payload: newFilters,
  };
};

// Acction thêm mới Account
export const actionAddAccountAPI = (accountNew) => {
  return (dispatch) => {
    return addAccountNewAPI(accountNew).then((response) => {
      // console.log("reponseAPI After add New Account:", response);
      // Sau khi thêm mới thành công thực hiện dispatch actionFetchListAccountAPI
      // để load lại danh sách Account cập nhật
      dispatch(actionFetchListAccountAPI());
    });
  };
};

// Acction xóa Account
export const actionDeleteAccountAPI = (id) => {
  return (dispatch) => {
    return deleteAccountAPI(id).then((response) => {
      // console.log("response sau khi xóa Account: ", response);
      dispatch(actionDeleteAccountRedux(id));
    });
  };
};

export const actionDeleteAccountRedux = (idDelete) => {
  return {
    type: DELETE_ACCOUNT,
    payload: idDelete,
  };
};

// Acction Update Account
// Không sử dụng thunk ở đây do không cần thiết
export const actionUpdateAccountAPI = (accountUpdate_API) => {
  return (dispatch) => {
    return updateAccountAPI(accountUpdate_API).then((response) => {
      // console.log("response sau khi xóa Account: ", response);
    });
  };
};
