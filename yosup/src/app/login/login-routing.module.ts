import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'message',
  loadChildren: '../message/message.module#MessageModule',
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
