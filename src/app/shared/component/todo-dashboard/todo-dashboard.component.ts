import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor() { }

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

}
