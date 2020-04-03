import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  submit() {
  }

}
