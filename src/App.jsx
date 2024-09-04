import { useState } from "react";
import Counter from "./components/counter";
const App = () => {
  const [items, setItems] = useState(["Jeans", "Jackets", "Shirts"]);

  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const addItemClickHandler = () => {
    setItems([...items, userInput]);
    setUserInput("");
  };

  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter Item Name "
      ></input>
      <button onClick={addItemClickHandler}>Add Item</button>
      {items.map((item, index, arr) => {
        return <Counter key={index} itemName={item} />;
      })}
    </>
  );
};
export default App;
