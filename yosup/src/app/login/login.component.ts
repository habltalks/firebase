import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AuthService } from '../auth/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
    private auth: AuthService,
    private fireAuth: AngularFireAuth,
    private dialog: MatDialog,
    private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  signup() {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(res => {
      const dialogRef = this.dialog.open(UsernamePopupComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.fireAuth.auth.currentUser.updateProfile({
          displayName: result,
          photoURL: ''
        }).then(retval => {
          this.firestore.collection('users').doc(this.fireAuth.auth.currentUser.uid)
          .set({displayName: result, uid: this.fireAuth.auth.currentUser.uid, status: 'online'});
          this.auth.updateStatus('online');
          this.goToMessage(res);
        });

      });

    }).catch(err => {
    });

  }

  login() {
    this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(res => {
      this.goToMessage(res);
    }).catch(err => {

    });

  }

  goToMessage(user) {
    this.auth.setUser(user);
    this.router.navigate(['message']);
  }

}

@Component({
  selector: 'app-username-popup',
  template: `
    <mat-form-field>
      <input matInput [(ngModel)]="username" placeholder="Username">
    </mat-form-field>
    <button mat-raised-button color="primary" (click)="closeDialog()">Submit</button>
  `
})
export class UsernamePopupComponent {
  username: string;

  constructor(private dialogRef: MatDialogRef<UsernamePopupComponent>) {}

  closeDialog() {
    this.dialogRef.close(this.username);
  }
}
