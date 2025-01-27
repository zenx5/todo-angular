import { Component } from '@angular/core';
import { TaskCoreService } from '../../task-service.service';
import { typeChange } from '../../tools/constants';

@Component({
  selector: 'list-task',
  imports: [],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  tasks:typeTask[] = []

  constructor(private taskService:TaskCoreService){
    this.tasks = this.taskService.tasks
    this.taskService.onChange( (listTask, current, tag) => {
      if( tag===typeChange.LIST_CHANGED) {
        this.tasks = listTask
      }
    })
  }

  editTask(index:number){
    this.taskService.selectTask(index)
  }

  toggleCompleted(index:number){
    this.taskService.toggleCompleted(index)
  }
}
