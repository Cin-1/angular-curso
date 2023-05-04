import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.html',
  styleUrls: ['./task-component.css'],
})
export class TaskComponent implements OnInit {
  mostrarElemento: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  mostrarElementof(): void {
    !this.mostrarElemento;
  }
}
