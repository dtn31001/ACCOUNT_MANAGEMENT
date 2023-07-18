import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import rootReduces from "../Reduces/RootReduces";

const middleware = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let storeRedux = createStore(rootReduces, middleware);

export default storeRedux;