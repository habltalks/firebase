import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MessageOptions } from './single-message/single-message.component';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit {

  message;
  user;
  messages$: Observable<any>;
  collection: AngularFirestoreCollection<MessageOptions>;
  onlineUser$: Observable<any>;

  constructor(private auth: AuthService,
    private firestore: AngularFirestore,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.user = this.auth.user;
    this.collection = this.firestore.collection<MessageOptions>('messages', ref => ref.orderBy('date'));
    this.messages$ = this.collection.valueChanges();
    this.onlineUser$ = this.db.list('users', ref =>
      ref.orderByChild('status')
          .equalTo('online'))
          .valueChanges();
  }

  sendMessage() {
    this.collection.add({ sender: this.user.displayName, date: new Date(), text: this.message });
    this.message = '';

  }

}
