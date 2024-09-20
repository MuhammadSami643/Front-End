import {
  Buy_Strawbery_Cake,
  Refund_Strawbery_Cake,
} from "./iceCreamActionType";

const buyStrawberyCakeActionCreator = (n) => {
  const obj = {
    type: Buy_Strawbery_Cake,
    payload: {
      numOfCakes: n,
    },
  };
};

const refundStrawberyCakeActionCreator = (n) => {
  const obj = {
    type: Refund_Strawbery_Cake,
    payload: {
      numOfCakes: n,
    },
  };
};

export { buyStrawberyCakeActionCreator, refundStrawberyCakeActionCreator };
