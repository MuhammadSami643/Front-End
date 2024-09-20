import { Buy_Vanilla_Cake, Refund_Vanilla_Cake } from "./cakeActionsTypes";

const defaultState = { vanillaCakes: 20 };

const cakeReducer = (store = defaultState, action) => {
  if (action.type === Buy_Vanilla_Cake) {
    return {
      ...store,
      vanillaCakes: store.vanillaCakes - action.payload.numOfCakes,
    };
  } else if (action.type === Refund_Vanilla_Cake) {
    return {
      ...store,
      vanillaCakes: store.vanillaCakes + action.payload.numOfCakes,
    };
  } else {
    return store;
  }
};

export default cakeReducer;
