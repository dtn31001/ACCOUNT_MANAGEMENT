/** @format */

import { createStore, applyMiddleware, compose } from "redux";
import rootReduces from "../Reducer/RootReducer";
import thunk from "redux-thunk";

const middleware = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let storeRedux = createStore(rootReduces, middleware);

export default storeRedux;
