import { Injectable } from '@angular/core';
import { ToDo } from '../data/todo.data';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private todos: ToDo[] = [
    {
      todo: 'Cook a meal',
      error: null,
      status: 'Completed',
    },
    {
      todo: 'Do a a deadlift',
      error: null,
      status: 'Pending',
    },
  ];


  public getAllToDos(): ToDo[] {
    return this.todos;
  }
}
