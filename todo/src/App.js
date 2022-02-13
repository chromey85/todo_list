import react, { useState, useEffect, useRef } from "react"
import { MdDeleteOutline } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';

function App() {
    const [items, setItems] = useState([]);
    const addList = list => {
        if (!list.text || /^\s*$/.test(list.text)) {
            return;
        }

        const newList = [list, ...items];

        setItems(newList);
        console.log(...items);
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <h2>(To delete, click on the list item)</h2>
            <div>
                {items.map((item, index) => (
                    <div>
                        <a onClick={() => setItems(items.filter((_, ind) => ind !== index))}>
                            {item}
                        </a>
                    </div>
                ))}
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                setItems((items) => [...items, formData.get("todo")])
                e.currentTarget.reset();
                }}>
                <input name="todo" required />
                <button type="submit">Add to List</button>
            </form>
            {/* <form className="list_form" onSubmit={addItem}>
                <input className="list_input" type="text" placeholder="Enter Item" value={input} name={text} />
                <div className="icons">
                    <MdDeleteOutline onClick={removeListItem} className="delete-icon" />
                    <AiOutlineEdit onClick={editItem} className="edit-icon" />
                </div>
                <button className="add_button">Add to List</button>
            </form> */}
        </div>
    )
}

export default App