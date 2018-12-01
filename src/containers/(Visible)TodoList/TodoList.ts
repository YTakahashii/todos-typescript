import { ITodoListConnectedProps, ITodoListDispatchProps } from 'src/components/TodoList/TodoListProps';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoAction from 'src/actions/Todo/TodoAction';
import { toggleTodo } from 'src/actions/Todo/TodoActionCreator';
import TodoList from 'src/components/TodoList/TodoList';
import TodoStates from 'src/states/TodoState';
import { VisibilityFilters } from 'src/states/VisibilityFilterState';
import IRootState from 'src/states';

const getVisibleTodos = (todos: TodoStates, filter: VisibilityFilters) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state: IRootState): ITodoListConnectedProps => {
    return {
        todoStates: getVisibleTodos(state.todoStates, state.visibilityFilterState.filter)
    };
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>): ITodoListDispatchProps => {
    return {
        toggleTodo: (id: number) => dispatch(toggleTodo(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);