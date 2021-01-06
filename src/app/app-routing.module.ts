import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthguardGuard } from './authguard.guard';



const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),canActivate:[AuthguardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

