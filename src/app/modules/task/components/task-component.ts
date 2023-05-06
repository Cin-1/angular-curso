import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.html',
  styleUrls: ['./task-component.css'],
})
export class TaskComponent implements OnInit {
  mostrarElemento: boolean = false;
  case: number = 3;
  constructor() {}

  ngOnInit(): void {}

  mostrarElementof(): void {
    console.log('string');
    this.mostrarElemento = !this.mostrarElemento;
    console.log(this.mostrarElemento);
  }
}
