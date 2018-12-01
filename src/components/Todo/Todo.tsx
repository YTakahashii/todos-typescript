import * as React from 'react';
import ITodoOwnProps from './TodoProps';

//Stateless Functional Component(SFC)という記法
const Todo = (props: ITodoOwnProps) => {
    const { onClick, completed, text } = props;

    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    );
}

export default Todo;