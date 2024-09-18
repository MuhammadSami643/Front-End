import { useDispatch, useSelector } from "react-redux";
import {
  buyVanillaCakeAction,
  refundVanillaCakeAction,
} from "../redux/cakeActions";

const Redux = () => {
  const dispatch = useDispatch();
  const abc = useSelector((x) => {
    return x;
  });
  console.log(abc);
  return (
    <>
      <h1>Vanilla Cakes:{abc.vanillaCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyVanillaCakeAction);
        }}
      >
        Buy Vanilla Cake
      </button>

      <button
        onClick={() => {
          dispatch(refundVanillaCakeAction);
        }}
      >
        Refund Vanilla Cake
      </button>
    </>
  );
};

export default Redux;
