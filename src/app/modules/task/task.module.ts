import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { TaskComponent } from './components/task-component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [TaskPageComponent, TaskComponent, HeaderComponent],
  imports: [CommonModule, TaskRoutingModule],
})
export class TaskModule {}
