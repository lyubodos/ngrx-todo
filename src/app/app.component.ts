import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from './data/todo.data';
import { ToDoListService } from './services/todos.service';
import { addToDo, loadToDos } from './store/actions/todos.action';
import { Observable } from 'rxjs';
import { timeStamp } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputData') inputData: ElementRef;

  public allToDos$: Observable<ToDo[]>;
  public todos: ToDo[] = [];

  constructor(private todosService: ToDoListService, private store: Store<{allToDos: ToDo[]}>) {}

  ngOnInit(): void {
    this.store.dispatch(loadToDos());
    this.allToDos$.subscribe(todos  => {
      this.todos = todos;
    })
    
  }

  public onAddTask() {
    this.store.dispatch(addToDo({content: "string"}));
  }
}
