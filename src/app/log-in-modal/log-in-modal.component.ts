import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LogInComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
}
