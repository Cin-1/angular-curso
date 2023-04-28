import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { LoginPageComponent } from './page/login-page.component';


@NgModule({
  declarations: [
    TaskPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
