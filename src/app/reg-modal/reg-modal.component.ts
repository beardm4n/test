import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-reg-modal',
  templateUrl: './reg-modal.component.html',
  styleUrls: ['./reg-modal.component.scss']
})
export class RegModalComponent implements OnInit {

  constructor(
    private dialog: MatDialogRef<RegistrationComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialog.close();
  }
}
