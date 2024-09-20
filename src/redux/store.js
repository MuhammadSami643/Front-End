import { combineReducers, createStore } from "redux";
import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCream: iceCreamReducer,
});

const reduxStore = createStore(rootReducer);

export default reduxStore;
