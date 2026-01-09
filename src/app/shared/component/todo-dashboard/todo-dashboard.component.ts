import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor(
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  todoArr: Array<Itodo> = [
    {
    todoItem: 'Html',
    todoId: '123'
  },
  {
    todoItem: 'CSS',
    todoId: '124'
  },
  {
    todoItem: 'Javascript',
    todoId: '125'
  },
  {
    todoItem: 'Angular',
    todoId: '126'
  }
  ]

  getNewTodo(todo: Itodo){
    this.todoArr.unshift(todo)
  }

  getRemoveTodo(id: string){
    let getindex = this.todoArr.findIndex(f => f.todoId === id)
    this.todoArr.splice(getindex, 1)

    this._snackBar.open(`The Todo Item Removed Successfully!!!`, 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }

  editTodo !: Itodo
  getEditTodo(todo: Itodo){
    this.editTodo = todo
  }

  getUpdatedTodo(todo: Itodo){
    let getIndex = this.todoArr.findIndex(t => t.todoId === todo.todoId)
    this.todoArr[getIndex] = todo
    
    this._snackBar.open(`The Todo Item Updated Successfully!!!`, 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }

}
