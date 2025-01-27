import { Injectable } from '@angular/core';
import { typeChange } from './tools/constants';

type FunctionCallback = (a:typeTask[], b:number, tag:string)=>void


@Injectable({
  providedIn: 'root'
})
export class TaskCoreService {
  tasks:typeTask[] = []
  currentTask:number = -1
  callbacks:FunctionCallback[] = []

  createTask(task:typeTask) {
    if( this.currentTask === -1 ) {
      this.tasks.push(task)
    }
    else {
      this.tasks = this.tasks.map( (current, index) => index===this.currentTask ? task : current )
    }
    this.dispathChange(typeChange.LIST_CHANGED)
  }

  removeTask(index:number){
    this.tasks = this.tasks.filter( (_,indexTask) => index!==indexTask)
    this.dispathChange(typeChange.LIST_CHANGED)
  }

  getTask(index:number) {
    const task = this.tasks.at(index)
    if( !task ) return null
    return task
  }

  selectTask(index:number) {
    this.currentTask = index
    this.dispathChange(typeChange.SELECT_TASK)
  }

  toggleCompleted(index:number) {
    this.tasks = this.tasks.map( (task, indexTask) => index===indexTask ? {...task, completed:!task.completed} : task )
    this.dispathChange(typeChange.LIST_CHANGED)
  }

  onChange(callback:FunctionCallback){
    this.callbacks.push( callback )
  }

  dispathChange(tag:string){
    for(const callback of this.callbacks ) {
      callback( this.tasks, this.currentTask, tag)
    }
  }

}
