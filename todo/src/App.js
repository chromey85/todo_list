import { useState } from "react"

const List = () => {
  const [item, setItems] = useState([""])
  const addHandler = () => {
    let storedList = [...item];
    storedList.push(item[item.length -1] +1)
    setItems(storedList)
  }
  const removeHandler = () => {
    let storedList = [...item];
    storedList.splice(item[item.length -1] -1)
    setItems(storedList)
  };
  const removeHandlerNum = (index) => {
    let storedList=[...List];
    storedList.splice(index, 1);
    setItems(storedList)
  };

  return (
    <div>
      <h1 class="title">Shopping List</h1>
      <h2>(Short list of instructions)</h2>
      {item.map((item, index) => {
        return <h4 onClick={() => removeHandlerNum(index)} key={index}>{item}</h4>})}
      <form>
        <label>
          <input type="text" name="item" /> 
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => addHandler()}>ADD</button>
      <button onClick={() => removeHandler()}>REMOVE ALL</button>
    </div>)
}

export default List