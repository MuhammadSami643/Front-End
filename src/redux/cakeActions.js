import { Buy_Vanilla_Cake, Refund_Vanilla_Cake } from "./cakeActionsTypes";

const buyVanillaCakeActionCreator = (n) => {
  const obj = {
    type: Buy_Vanilla_Cake,
    payload: {
      numOfCakes: n,
    },
  };
  return obj;
};

const refundVanillaCakeActionCreator = (n) => {
  const obj = {
    type: Refund_Vanilla_Cake,
    payload: {
      numOfCakes: n,
    },
  };
  return obj;
};

export { buyVanillaCakeActionCreator, refundVanillaCakeActionCreator };
