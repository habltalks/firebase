import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  user;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private firestore: AngularFirestore) {
    this.afAuth.authState
      .subscribe(user => {
        if (user) {
          this.user = user;
          this.updateOnConnect();
          this.updateOnDisconnect();
        }
      });
  }

  private updateOnConnect() {
    this.db.database.ref();
    return this.db.object('.info/connected')
      .valueChanges().subscribe((connected: any) => {
        const status = connected ? 'online' : 'offline';
        this.updateStatus(status);
      });
  }

  private updateOnDisconnect() {
    firebase.database().ref().child(`users/${this.user.uid}`)
            .onDisconnect()
            .update({status: 'offline'});
  }

  updateStatus(status: string) {
    if (!this.user) {
      return;
    }
    this.db.object(`users/` + this.user.uid).update({ status: status, displayName: this.user.displayName });
  }

  setUser(user) {
    this.user = user;
  }

  isLoggedin() {
    return this.user;
  }
}
