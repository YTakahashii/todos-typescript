import { IAddTodoDispatchProps } from 'src/components/AddTodo/AddTodoProps';
import { addTodo } from 'src/actions/Todo/TodoActionCreator';
import AddTodo from 'src/components/AddTodo/AddTodo';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch): IAddTodoDispatchProps => {
    return {
        addTodo: (todoText: string) => {
            dispatch(addTodo(todoText));
        }
    };
}

export default connect(
    null, mapDispatchToProps
)(AddTodo);