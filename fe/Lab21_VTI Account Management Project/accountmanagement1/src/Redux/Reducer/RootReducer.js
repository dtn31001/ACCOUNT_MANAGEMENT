/** @format */

import { combineReducers } from "redux";
import formreducer from "./FormReducer";
import accountReducer from "./AccountReducer";
import DepartmentReducer from "./DepartmentReducer";
import PositionReducer from "./PositionReducer";
import FormUpdate from "./FormUpdateReducer";

let rootReduces = combineReducers({
  showForm: formreducer,
  listAccount: accountReducer,
  listDepartment: DepartmentReducer,
  listPosition: PositionReducer,
  FormUpdate: FormUpdate,
});
export default rootReduces;
