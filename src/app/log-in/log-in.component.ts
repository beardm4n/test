import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface SignInInterface {
  email: string;
  password: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private logInForm: FormGroup;
  private formData: SignInInterface;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          // tslint:disable-next-line:max-line-length
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/),
        ]
      ],
    });
  }

  submit() {
    if (this.logInForm.valid) {
      this.formData = {...this.logInForm.value};
    }
  }
}
