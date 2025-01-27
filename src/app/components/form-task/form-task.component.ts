import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-task',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {
  task = new FormControl('')

  onCreateTask() {
    alert( this.task.value )
  }
}
