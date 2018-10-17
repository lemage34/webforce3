import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptesteur',
  templateUrl: './comptesteur.component.html',
  styleUrls: ['./comptesteur.component.css']
})
export class ComptesteurComponent implements OnInit {

  listName = 'Ma Todo List'; 
  newTodo: string = '';
  todos: string[] = [];

  createTodo() { 
    if (this.newTodo) { 
      this.todos.push(this.newTodo); 
      this.newTodo = ''; 
	  console.log('lalal');
	  }
	  }
  
  constructor() { }

  ngOnInit() {
  }

}
