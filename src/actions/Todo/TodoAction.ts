import TodoActionType from './TodoActionType';

//ここでActionを定義する
export interface IAddTodoAction {
    type: TodoActionType.ADD_TODO; //typeはActionに必ず設定しなければならない
    //ADD_TODOのReducerで使うプロパティ
    id: number;
    text: string;
}

export interface IToggleTodoAction {
    type: TodoActionType.TOGGLE_TODO;
    id: number; //どのIDをトグルするかを指定するため
}

//ActionをまとめてExportする（Reducerで使用する）
//TodoActionは IAddTodoAction または IToggleTodoAction が入るという意味（intersection/交差型）という
type TodoAction = IAddTodoAction | IToggleTodoAction;
export default TodoAction;