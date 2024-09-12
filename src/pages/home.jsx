import { useContext, useState } from "react";
import Counter from "../components/counter";
import { userAuthContext } from "../contexts/userAuthContext";

const Home = () => {
  const [items, setItems] = useState(["Jeans", "Jackets", "Shirts"]);

  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const addItemClickHandler = () => {
    setItems([...items, userInput]);
    setUserInput("");
  };

  const x = useContext(userAuthContext);

  return (
    <>
      <p>{x.isLoggedIn}</p>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="Enter Item Name "
      ></input>
      <button onClick={addItemClickHandler}>Add Item</button>
      {items.map((item, index) => {
        return (
          <Counter
            xyz={() => {
              const updateItems = [
                ...items.slice(0, index),
                ...items.slice(1 + index),
              ];
              setItems(updateItems);
            }}
            items={items}
            setItems={setItems}
            index={index}
            key={index}
            itemName={item}
          />
        );
      })}
    </>
  );
};
export default Home;
