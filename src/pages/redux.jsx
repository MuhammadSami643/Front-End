import { useDispatch, useSelector } from "react-redux";
import {
  buyVanillaCakeActionCreator,
  refundVanillaCakeActionCreator,
} from "../redux/cakeActions";
import { useState } from "react";
import {
  buyStrawberyCakeActionCreator,
  refundStrawberyCakeActionCreator,
} from "../redux/iceCream/iceCreamAction";

const Redux = () => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState();

  const cake = useSelector((x) => {
    return x.cakes;
  });

  const ice = useSelector((x) => {
    return x.iceCream;
  });

  return (
    <>
      <input
        placeholder="number"
        type="number"
        onChange={(e) => {
          setUserInput(Number(e.target.value));
        }}
      />
      <h1>Vanilla Cakes:{cake.vanillaCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyVanillaCakeActionCreator(userInput));
        }}
      >
        Buy Vanilla Cake
      </button>

      <button
        onClick={() => {
          dispatch(refundVanillaCakeActionCreator(userInput));
        }}
      >
        Refund Vanilla Cake
      </button>

      <br />

      <h1>Strawbery Cakes:{ice.iceCream}</h1>
      <button
        onClick={() => {
          dispatch(buyStrawberyCakeActionCreator(userInput));
        }}
      >
        Refund Strawbery Cake
      </button>

      <button
        onClick={() => {
          dispatch(refundStrawberyCakeActionCreator(userInput));
        }}
      >
        Refund Strawbery Cake
      </button>
    </>
  );
};

export default Redux;
