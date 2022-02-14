import React, { useState } from 'react';
import Todo_Form from './Todo_Form';
import Todo from './Todo';

function Todo_List() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

  return (
    <>
        <h1>Whats the plan for Today</h1>
        <Todo_Form onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
}

export default Todo_List;