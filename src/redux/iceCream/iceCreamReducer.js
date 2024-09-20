import {
  Buy_Strawbery_Cake,
  Refund_Strawbery_Cake,
} from "./iceCreamActionType";

const initialValues = {
  StrawberyCake: 100,
};

const iceCreamReducer = (store = initialValues, action) => {
  if (action.type === Buy_Strawbery_Cake) {
    return {
      ...store,
      StrawberyCake: store.StrawberyCake - action.payload.numOfCakes,
    };
  } else if (action.type === Refund_Strawbery_Cake) {
    return {
      ...store,
      StrawberyCake: store.StrawberyCake + action.payload.numOfCakes,
    };
  } else {
    return store;
  }
};

export default iceCreamReducer;
