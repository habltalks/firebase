import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface MessageOptions {
  sender: string;
  date: Date;
  text: string;
}

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SingleMessageComponent implements OnInit {

  @Input() option: MessageOptions;
  @Input() self = true;

  constructor() { }

  ngOnInit() {
  }

}
