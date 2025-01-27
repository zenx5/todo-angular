import { Component } from '@angular/core';

type typeTask = {
  title: string
  description: string
}

@Component({
  selector: 'list-task',
  imports: [],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  tasks:typeTask[] = [
    {
      title: 'Tarea 1',
      description: 'Algo por aca'
    }
  ]
}
