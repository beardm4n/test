import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetUsersService } from '../get-users.service';
import { MatDialogRef } from '@angular/material/dialog';

import { User } from '../user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  user: User;
  form: FormGroup;

  constructor(
    private getUser: GetUsersService,
    public dialogRef: MatDialogRef<UserComponent>,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.minLength(1),
        Validators.required
      ]),
      lastName: new FormControl('',  [
        Validators.minLength(1),
        Validators.required
      ]),
    });

    this.user = this.getUser.getUser();
  }

  submit() {
    this.user.firstName = this.form.get('firstName').value;
    this.user.lastName = this.form.get('lastName').value;

    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
