import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todo-app');
}

