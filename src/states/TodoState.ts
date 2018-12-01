
//本家ではreducers/todosの中でしらっと定義されている
export interface ITodoState {
    id: number;
    text: string;
    completed: boolean;
}

type TodoStates = ITodoState[];
export default TodoStates;