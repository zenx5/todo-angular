import { Component } from '@angular/core';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

@Component({
  selector: 'app-root',
  imports: [FormTaskComponent, ListTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';

}
