import { getListAccountAPI } from "../../API/AccountApi";
import { FETCH_ACCOUNT_LIST } from "../Contants/ActionType";


export let actionFetchListAccount = ()=>{
    return() =>{
    return getListAccountAPI().then((listAccountAPI)=>{
    dispatch(actionFetchListAccountRedux(listAccountAPI));
    });
};
    
 };

 // khai bao action FETCH_ACCOUNT_LIST
 
export let actionFetchListAccountRedux = (listAccountAPI)=>{
    return{
    type: FETCH_ACCOUNT_LIST,
    paylaod: listAccountAPI,

    };
};
    
 