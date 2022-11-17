import { Injectable } from '@angular/core';
import { ToDo } from '../data/todo.data';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private todos: ToDo[] = [
    {
      id: "11-02-22",
      content: 'Cook a meal',
    },
    {
      id: "12-02-22",
      content: 'Do a a deadlift',
    },
  ];


  public getAllToDos(): ToDo[] {
    return this.todos;
  }
}
