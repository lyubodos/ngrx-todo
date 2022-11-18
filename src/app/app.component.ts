import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToDo } from './data/todo.data';
import { ToDoListService } from './services/todos.service';
import { addToDo, loadToDos } from './store/actions/todos.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputData') inputData: ElementRef;

  public todos: ToDo[] = [];

  constructor(private todosService: ToDoListService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getAllToDos();

    this.todosService.onToDosChanged.subscribe(todos => {
      this.todos = todos;
    })
  }

  public onAddTask() {
    let inputData = this.inputData.nativeElement.value;
    let lastToDo = this.todos[this.todos.length-1];
    let indexOfLastToDo: number = this.todos.indexOf(lastToDo);

    if(inputData !== ''){
      this.todosService.addToDo({id: indexOfLastToDo+2, content: inputData});
    }

    this.inputData.nativeElement.value = '';
  }
}
