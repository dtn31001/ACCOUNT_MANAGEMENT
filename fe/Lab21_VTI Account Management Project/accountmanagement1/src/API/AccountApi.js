/** @format */

import { api } from "./api";

// get listAccount API
const getListAccountAPI = () => {
  return api("GET", "accounts/", null);
};

//create new account
const addAccountNewAPI = (accountNew) => {
  return api("POST", "accounts/", accountNew);
};
// Delete Account
const deleteAccountAPI = (id) => {
  let url = "accounts/" + id;
  return api("DELETE", url, null);
};
// Update Account
const updateAccountAPI = (accountUpdate) => {
  let url = "accounts/" + accountUpdate.id;
  return api("PUT", url, accountUpdate.account_Update);
};

// // Search Account
// const searchAccountAPI = (searchAccount)=>{
//  let url
// }

export { getListAccountAPI, addAccountNewAPI, deleteAccountAPI, updateAccountAPI };
