import TodoStates from './TodoState';
import IVisibilityFilterState from './VisibilityFilterState';

//rootReducerの型定義
//mapStateToProps(state: IRootState)のように引数stateの型として使用する
//typesafe-actionsというnpmモジュールのStateTypeを使えばこんなめんどくさい定義は必要ないが、現在バグでコンパイルエラーになってしまうのでこの方法を使う

export default interface IRootState {
    todoStates: TodoStates;
    visibilityFilterState: IVisibilityFilterState;
}