import { api } from "./api";

// get listAccount API
const getListAccountAPI = () => {
  return api("GET", "accounts/", null);
};

//create new account
const addAccountNewAPI = (accountNew) => {
    return api("POST", "accounts/", accountNew);
  };
export{getListAccountAPI,addAccountNewAPI};