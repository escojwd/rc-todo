import React, { useState } from 'react'
import Button from '../Button/Button';
import Todo from '../Todo/Todo';
import './TodoHead.css';

function TodoHead() {
    const [singleTodo, setSingleTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const todoText = e => {
        setSingleTodo(e.target.value);
    }

    function testedOne(e) {
        if (!singleTodo) {
            alert("write something");
            return;
        }
        setSingleTodo(todos.push(<Todo text={singleTodo} editAct={testTwo} doneAct={testThree} deleteAct={testFour} />));
        // setSingleTodo(e.target.value);
    }

    function testTwo(e) {
        console.log("this's edit test");
        console.log(e.target.textContent);
        console.log(e.target.ke);
    }

    function testThree() {
        console.log("this's done test");
    }

    function testFour() {
        console.log("this's delete test");
    }

    // console.log(todos);



    return (
        <div className={'wrap'}>
            <h3>What is your master plan? What is your scenario?</h3>
            <input className='todo-input' type="text" value={singleTodo} onChange={todoText} placeholder="Flowers are planted by more gangs" />
            <div>
                <Button action={testedOne} className='add-button' btnName={'+'} />
                <select name="todos" className={'list-select'}>
                    <option className={'all-option'} value="all">All</option>
                    <option className={'comp-option'} value="complited">Complited</option>
                    <option className={'uncomp-option'} value="uncomplited">Uncomplited</option>
                </select>
            </div>
            <ul>{todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
        </div>
    )

}

export default TodoHead;