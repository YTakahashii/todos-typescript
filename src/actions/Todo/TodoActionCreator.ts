import { IAddTodoAction, IToggleTodoAction } from "./TodoAction";
import TodoActionType from './TodoActionType';

//ActionCreatorはActionを生成する関数
//例えばaddTodo(0, 'a')とどこかで呼び出されると、ReducerのADD_TODOが実行される

let nextTodoId = 0;

export const addTodo = (text: string): IAddTodoAction => {
    return {
        type: TodoActionType.ADD_TODO,
        id: nextTodoId++,
        text: text
    };
}

export const toggleTodo = (id: number): IToggleTodoAction => {
    return {
        type: TodoActionType.TOGGLE_TODO,
        id //プロパティ名と引数名が同じ場合は右辺を省略できる
    };
}