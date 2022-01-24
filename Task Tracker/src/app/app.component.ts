import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tables } from './tables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  EmpID: string = "";
  name: string = "";
  task: string = "";
  deadline: string = "";

  taskArray: Array<tables> = [];

  main: boolean = true;
    
  save(mainRef: NgForm)
  {
    let taskNum = mainRef.value;
    let newTask: tables = new tables(taskNum.EmpID, taskNum.name, taskNum.task, taskNum.deadline);
    this.taskArray.push(newTask);
    mainRef.reset();
  }
}