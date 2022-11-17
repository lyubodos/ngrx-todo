import { createSelector } from "@ngrx/store";
import { AppState, ToDosState } from "src/app/data/todo.data";


export const selectToDos = (state: AppState) => state.todos;

export const selectAllToDos = createSelector(
    selectToDos,
    (state: ToDosState) => state.todos
);
