import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent, UsernamePopupComponent } from './login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [LoginComponent, UsernamePopupComponent],
  entryComponents: [UsernamePopupComponent]
})
export class LoginModule { }
