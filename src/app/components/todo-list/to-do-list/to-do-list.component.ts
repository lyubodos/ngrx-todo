import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/data/todo.data';
import { ToDoListService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() public todo: ToDo;
  @Input() public index: number;

  constructor(private todosService: ToDoListService) { }

  ngOnInit(): void {
  }

  public onDelete() {
    this.todosService.deleteToDo(this.index);
  }
}
