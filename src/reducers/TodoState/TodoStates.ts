import TodoState from "src/states/TodoState";
import TodoAction from 'src/actions/Todo/TodoAction';
import TodoActionType from 'src/actions/Todo/TodoActionType';

//Resucer-Actionが発火されたときにActionTypeごとにStateを更新する
const todoStates = (state: TodoState[] = [], action: TodoAction): TodoState[] => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            const newTodo: TodoState = {
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
                        completed: true
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