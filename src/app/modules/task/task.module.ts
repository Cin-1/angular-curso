import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { TaskComponent } from './components/task-component';

@NgModule({
  declarations: [TaskPageComponent, TaskComponent],
  imports: [CommonModule, TaskRoutingModule],
})
export class TaskModule {}
