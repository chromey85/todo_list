import react, { useState, useEffect, useRef } from 'react';
import './App.css';
// import { MdDeleteOutline } from 'react-icons/md';
// import { AiOutlineEdit } from 'react-icons/ai';

function App() {
    class TodoItem {
        constructor(key, text) {
            this.key = key;
            this.text = text;
        }
    }

    let [state, setState] = useState({ items: [], creationCount: 0 });
    window.state = state;

    function addTodoItem(string) {
        state.items.push(new TodoItem(state.creationCount, string));
        state.creationCount++;
        setState({ ...state });
    }

    function removeTodoItem(key) {
        state.items = state.items.filter((item) => item.key !== key);
        setState({ ...state });
    }

    return (
        <div>
            <h1>Shopping List</h1>

            <h2>(To delete, click on the list item)</h2>

            <div id="list-items-container">
                {state.items.map(todoItem =>
                    <div className="list-item" key={todoItem.key}>
                        <a onClick={() => removeTodoItem(todoItem.key)}>{todoItem.text}</a>
                    </div>
                )}
            </div>

            <form onSubmit={(e) => {
                addTodoItem(new FormData(e.currentTarget).get('todo'));
                e.preventDefault();
                e.currentTarget.reset();
            }}>
                <input name="todo" required />
                <button type="submit">Add to List</button>
            </form>
        </div>
    );
}

export default App;
