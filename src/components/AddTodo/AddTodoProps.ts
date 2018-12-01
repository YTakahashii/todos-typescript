export interface IAddTodoDispatchProps {
    addTodo: (todoText: string) => void;
}

type AddTodoDispatchProps = IAddTodoDispatchProps;
export default AddTodoDispatchProps;