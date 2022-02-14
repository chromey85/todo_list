import react, {useState, useEffect, useRef} from "react"
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';

const List = ({removeList}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  }); 

  const submitUpdate = value => {
    updateList(edit.id, value)
    setEdit({
      id: null,
      value: ""
    })
  };

  // if (edit.id) {
  //   return edit={edit}, onSubmit={submitUpdate};
  // };
//=================================================================

  const [item, setItems] = useState([]);
  const addList = list => {
    if(!list.text || /^\s*$/.test(list.text)){
      return;
    }

    const newList = [list, ...item];

    setItems(newList);
    console.log(...item);
  }

  const updateList = (listId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }

    setItems(prev => prev.map(e => (e.id === listId ? newValue : e)));
  };

  const addHandle = i => {
    i.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  };

  const changeHandle  = i => {
    setInput(i.target.value);
  }

  const removeHandler = () => {
    setInput(i.target.value);
  };

  const completeList = id => {
    let updatedList = newList.map(list => {
        if (list.id === id) {
            list.isComplete = !list.isComplete;
        }
        return list;
    });
    setItems(updatedList);
};

  return item.map((list, index) =>(
    <div className={list.isComplete ? "list-row complete" : "list-row"} key={index}>
      <div key={list.id} onClick={() => completeList(list.id)}>
            {list.text}
        </div>

        <div className="icons">
            <MdDeleteOutline onClick={() => removeList(list.id)} className="delete-icon"/>
            <AiOutlineEdit onClick={() => setEdit({id: list.id, value: list.text})} className="edit-icon"/>
        </div>
    </div>
  ))(
    <div>
      <h1>Shopping List</h1>
      <h2>(Short list of instructions)</h2>

      <List addList={addList} completeList={completeList} removeList={removeList} updateList={updateList} />

      <form className="list_form" onSubmit={addHandle}>
        {props.edit ? 
        ( <><input type="text" placeholder="update an Item" value={input} name="text" className="list-input edit" onChange={changeHandle} />

        <button className="list-input edit">Update</button></>)
      :
        (<><input type='text' placeholder='Add an Item' value={input} name='text' className='todo-input' onChange={changeHandle}/>

        <button className="list-input">Add</button></>
      )}
        
      </form>
      
      </div>)
  




    // <div>
    //   <h1 class="title">Shopping List</h1>
    //   <h2>(Short list of instructions)</h2>
    //   {item.map((item, index) => {
    //     return <h4 onClick={() => removeHandlerNum(index)} key={index}>{item}</h4>})}
    //   <form>
    //     <label>
    //       <input type="text" name="item" /> 
    //     </label>
    //     <input type="submit" value="Submit" />
    //   </form>
    //   <button onClick={() => addHandler()}>ADD</button>
    //   <button onClick={() => removeHandler()}>REMOVE ALL</button>
    // </div>)
}

export default List