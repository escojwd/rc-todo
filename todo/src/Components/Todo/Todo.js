import React from 'react';
import Button from '../Button/Button';

const Todo = ({ text, editAct, doneAct, deleteAct }) => {
    return (
        <div>
            <p className={'todo-text'}>{text}</p>
            <Button action={editAct} btnStyle={'edit-btn'} btnName={'Edit'} />
            <Button action={doneAct} btnStyle={'done-btn'} btnName={'Done'} />
            <Button action={deleteAct} btnStyle={'delete-btn'} btnName={'Delete'} />
        </div>
    )
}

export default Todo;