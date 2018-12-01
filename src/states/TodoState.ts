
//本家ではreducers/todosの中でしらっと定義されている
export default interface ITodoState {
    id: number;
    text: string;
    completed: boolean;
}