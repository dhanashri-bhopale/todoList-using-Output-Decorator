import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private _snackBar : MatSnackBar,

    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  @Input() todoObj : Array<Itodo> = []
  @Output() emitRemoveTodo : EventEmitter<string> = new EventEmitter()

  trackById(index: number, todo: Itodo){
    return todo.todoId
  }

  onRemove(todo: Itodo){
    let matConfig = new MatDialogConfig()
    matConfig.disableClose = true
    matConfig.data = `Are You Sure You Want To Delete this ${todo.todoItem} !!!`

    let matDialogRef = this._matDialog.open(GetConfirmComponent, matConfig)
    matDialogRef.afterClosed()
    .subscribe(res => {
      if(res){
        this.emitRemoveTodo.emit(todo.todoId)
      }
    })
  }

}
