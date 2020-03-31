import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user;

  constructor(
    private getUsers: GetUsersService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.user = this.getUsers.getUser();
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '400px',
    });
  }

}
