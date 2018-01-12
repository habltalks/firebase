import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';
import { SingleMessageComponent } from './single-message/single-message.component';
import { OnlineUserComponent } from './online-user/online-user.component';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [MessageComponent, SingleMessageComponent, OnlineUserComponent]
})
export class MessageModule { }
