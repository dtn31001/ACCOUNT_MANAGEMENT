import { FETCH_ACCOUNT_LIST } from "../Contants/ActionType";


let initialState= [];

let accountreducer = (state= initialState , action)=>{
    switch (action.type) {
        case FETCH_ACCOUNT_LIST:
            let listAccountAPI = action.paylaod;
            return listAccountAPI;
       
        default:
            return [...state];
    }
};

export default accountreducer;