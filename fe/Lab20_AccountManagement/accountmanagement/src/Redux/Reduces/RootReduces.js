import { combineReducers } from "redux";
import accountreducer from "./AccountReduces";

//import accountreducer from "./AccountReduces";
import formreducer from "./FormReduces";
//import accountReducer from './../../../../../Lab8_DemoReduxCore/demoredux/src/Redux/Reduces/accountReduces';



let rootReduces = combineReducers({
    showForm: formreducer,
    listAccount: accountreducer,
});
export default rootReduces;