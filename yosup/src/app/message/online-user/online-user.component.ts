import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-online-user',
  templateUrl: './online-user.component.html',
  styleUrls: ['./online-user.component.sass']
})
export class OnlineUserComponent implements OnInit {

  @Input() username;
  @Input() self;

  constructor() { }

  ngOnInit() {
  }

}
