import * as React from 'react';
import AddTodoState from './AddTodoState';
import AddTodoProps from './AddTodoProps';

export default class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
    //stateがあるときはconstructorで初期化する
    constructor(props: AddTodoProps) {
        super(props);
        this.state = {
            input: ''
        };
    }

    //JSX内のイベントハンドラはプロパティメソッドとして定義したほうが可読性が上がる
    //private メソッド名 = (パラメータ: パラメータの型): 戻り値の型 => { 処理 }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { addTodo } = this.props;
        const { input } = this.state;

        e.preventDefault();
        if (!input.trim()) {
            return;
        }

        addTodo(input);

        this.setState({
            input: ''
        });
    }

    private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            input: e.currentTarget.value
        });
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange} value={this.state.input}/>
                    <button type="submit">
                        Todoを追加
                    </button>
                </form>
            </div>
        );
    }
}