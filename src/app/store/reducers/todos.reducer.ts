import { createReducer, on } from '@ngrx/store';
import { ToDosState } from 'src/app/data/todo.data';
import { addToDo, loadToDos } from '../actions/todos.action';


export const initialState: ToDosState = {
  todos: [ {
    id: 0,
    content: 'Cook a meal',
  },
  {
    id: 1,
    content: 'Do a a deadlift',
  }],
  error: null,
  status: 'Pending',
};


export const toDoReducer = createReducer(
  initialState,
  on(loadToDos, (state) => state),
  on(addToDo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: 2, content }],
  }))
);
