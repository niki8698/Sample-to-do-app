import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthguardGuard} from '../authguard.guard'

import { TodoComponent } from './todo.component';

const routes: Routes = [{ path: '', component: TodoComponent,canActivate:[AuthguardGuard]  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

