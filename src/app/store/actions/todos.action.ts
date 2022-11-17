import { createAction, props } from "@ngrx/store";

export const loadToDos = createAction(
    '[ToDo Component] Load ToDos'
)


export const addToDo = createAction(
    '[ToDo Component] Add ToDo',
    props<{ content: string }>()
);

export const removeToDO =  createAction(
    '[Todo Component] Remove Todo',
    props<{ id: string }>()
)