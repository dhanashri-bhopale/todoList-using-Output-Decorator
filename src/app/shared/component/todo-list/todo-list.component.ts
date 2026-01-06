import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() todoObj : Array<Itodo> = []

  trackById(index: number, todo: Itodo){
    return todo.todoId
  }

}
