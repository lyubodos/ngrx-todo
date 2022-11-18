import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/todo-list/to-do-list/to-do-list.component';
import { toDoReducer } from './store/reducers/todos.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
