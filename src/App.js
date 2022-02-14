import react, { useState, useEffect, useRef } from 'react';
import './App.css';
// import { MdDeleteOutline } from 'react-icons/md';
// import { AiOutlineEdit } from 'react-icons/ai';

function App() {

    // Using a class for todo items gives us an API to follow for updating state
    class TodoItem {
        constructor(key, text) {
            this.key = key;
            this.text = text;
        }
    }

    // Using an object to hold the todo items and the number of created items
    // allows us to use the keys as the ids for the todo items
    let [state, setState] = useState({ items: [], creationCount: 0 });
    window.state = state;

    // Explicit add and remove functions makes the code easier to read, follow,
    // and maintain in the future
    function addTodoItem(string) {
        // This is a cleaner way to update the state than what you had before
        state.items.push(new TodoItem(state.creationCount, string));
        state.creationCount++;
        setState({ ...state });
    }
    function removeTodoItem(key) {
        // Let me know if you have any questions about these functions
        state.items = state.items.filter((item) => item.key !== key);
        setState({ ...state });
    }

    return (
        <div>
            <h1>Shopping List</h1>

            <h2>(To delete, click on the list item)</h2>

            <div id="list-items-container">
                {state.items.map(todoItem =>
                    // We can now use the key to identify specific todo items
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
