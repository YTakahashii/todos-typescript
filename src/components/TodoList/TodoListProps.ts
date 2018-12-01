import TodoStates from 'src/states/TodoState';

//ConnectedProps: ReduxのStoreから受け取る値をまとめたProps
export interface ITodoListConnectedProps {
    todoStates: TodoStates;
}

//DispatchProps: ReduxのActionを呼び出すためのProps
export interface ITodoListDispatchProps {
    toggleTodo: (id: number) => void;
}

//union型にしてPropsをまとめる
type TodoListProps = ITodoListConnectedProps & ITodoListDispatchProps;
export default TodoListProps;