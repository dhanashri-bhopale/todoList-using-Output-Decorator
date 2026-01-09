import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges{
  @ViewChild('todoForm') todoForm !: NgForm
  
  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter()
  @Input() getEditTodo !: Itodo
  isInEditMode : boolean = false
  @Output() emitUpdatedTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor(
    private _matSnackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getEditTodo']['currentValue']){
      this.isInEditMode = true
      this.todoForm.form.patchValue(changes['getEditTodo']['currentValue'])
    }
  }

  

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

  onUpdate(){
    if(this.todoForm.valid){
      let updatedObj : Itodo = {...this.todoForm.value, todoId : this.getEditTodo.todoId}
      console.log(updatedObj)
      this.emitUpdatedTodo.emit(updatedObj)
      this.isInEditMode = false
      this.todoForm.reset()

      
    }
  }

}
