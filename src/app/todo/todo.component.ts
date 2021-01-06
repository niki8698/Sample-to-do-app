import { Component, OnInit } from '@angular/core';
import {AuthguardGuard} from '../authguard.guard'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public items = [];
  public newTask;
  model ={};

  constructor() { }

  ngOnInit(): void {
  }
  todos

  title = 'Todo App';
  datas = [];



  add(data) {

    this.datas.push(data.value);
    localStorage.setItem('datas',JSON.stringify(this.datas));
   // let Userdata: Array < object >= JSON.parse(localStorage.getItem('datas'));
    data.value = '';
     return console.log(this.datas);



  }




  delete(data) {
    this.datas = this.datas.filter(el => {
      return el !== data;

    });


  }




}
