import react, { useState, useEffect, useRef } from 'react';

function Todo_Form(props) {
    const[input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
       inputRef.current.focus() 
    })

    const handleChange = i => {
      setInput(i.target.value);
    }

    const addHandle = i => {
    i.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
    }

    return (
        <form className='todo-form' onSubmit={addHandle}>
            {props.edit ? ( <><input type='text'
                placeholder='update an Item'
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef} />
                <button className='todo-button edit'>Update</button></>) :
            (<><input type='text'
                    placeholder='Add an Item'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef} />
                    <button className='todo-button'>Add todo</button></>)
            }
        </form>
    )
}

export default Todo_Form;