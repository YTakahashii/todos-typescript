import * as React from 'react';
import TodoListProps from './TodoListProps';
import Todo from '../Todo/Todo';

const TodoList = (props: TodoListProps) => {
    const { todoStates, toggleTodo } = props;

    return (
        <ul>
            {todoStates.map(todo =>
                <Todo
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    {...todo} //todoを展開して同じ名前のプロパティを渡す
                />
            )}
        </ul>
    );
}

export default TodoList;