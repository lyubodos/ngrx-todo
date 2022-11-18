import { Injectable } from '@angular/core';
import { ToDo } from '../data/todo.data';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private todos: ToDo[] = [
    {
      id: 1,
      content: 'Cook a meal',
    },
    {
      id: 2,
      content: 'Do a a deadlift',
    },
  ];

  public onToDosChanged = new Subject<ToDo[]>();

  public getAllToDos(): ToDo[] {
    return this.todos;
  }

  public addToDo(todo: ToDo) { 
    this.todos.push(todo);
    this.onToDosChanged.next(this.todos.slice());
  }

  public deleteToDo(id: number) {
    this.todos.splice(id, 1);
    this.onToDosChanged.next(this.todos.slice());
  }
} 
