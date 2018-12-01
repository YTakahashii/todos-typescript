import TodoStates, { ITodoState } from "src/states/TodoState";
import TodoAction from 'src/actions/Todo/TodoAction';
import TodoActionType from 'src/actions/Todo/TodoActionType';

//Resucer-Actionが発火されたときにActionTypeごとにStateを更新する
const todoStates = (state: TodoStates = [], action: TodoAction): TodoStates => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            const newTodo: ITodoState = {
                id: action.id,
                text: action.text,
                completed: false
            };

            return [
                ...state,
                newTodo
            ];
        case TodoActionType.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id == action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}

export default todoStates;