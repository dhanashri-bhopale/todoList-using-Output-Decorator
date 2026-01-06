import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _matSnackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('todoForm') todoForm !: NgForm
@Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter()

  onAdd(){
    if(this.todoForm.valid){
      let todoObj: Itodo = {
        ...this.todoForm.value,
        todoId: Date.now().toString()
      }
      console.log(todoObj)
      this.todoForm.reset()
      this.emitNewTodo.emit(todoObj)

      this._matSnackBar.open(`The TodoItem Added Successfully !!!`, 'Close',{
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        duration: 3000
      })
    }
  }

}
