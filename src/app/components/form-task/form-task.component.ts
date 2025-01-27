import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskCoreService } from '../../task-service.service';
import { typeChange } from '../../tools/constants';

@Component({
  selector: 'form-task',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {
  title = new FormControl('')
  task = new FormControl('')

  constructor(private taskService:TaskCoreService) {
    taskService.onChange( (listTasks, indexTask, tag)=>{
      if( indexTask!==-1 && tag===typeChange.SELECT_TASK ) {
        const task = listTasks[indexTask]
        this.title.setValue( task.title )
        this.task.setValue( task.description )
      }
    })
  }

  onCreateTask() {
    if( !this.task.value || !this.title.value ) return
    const currentIndex = this.taskService.currentTask

    const isCompleted = currentIndex===-1 ? false : this.taskService.tasks[currentIndex].completed

    this.taskService.createTask({
      completed: isCompleted,
      title: this.title.value,
      description: this.task.value
    })

    this.title.setValue("")
    this.task.setValue("")
  }
}
