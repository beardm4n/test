import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';

import { RegModalComponent } from '../reg-modal/reg-modal.component';

interface RegistrationInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private formData: RegistrationInterface;
  public regForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[А-Яа-яЁё\s]+|[A-Za-z\s]+$/),
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
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
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/),
        ]
      ],
      age: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{1,3}$/),
        ]
      ],
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    })
  }

  submit() {
    if (this.regForm.valid) {
      this.formData = {...this.regForm.value};
    }
  }

  // password matching
  mustMatch(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      // const p1 = formGroup.controls[pass1];
      const p1 = formGroup.get(pass1);
      // const p2 = formGroup.controls[pass2];
      const p2 = formGroup.get(pass2);

      // set error on confirmPassword if validation fails
      if (p1.value !== p2.value) {
        p2.setErrors({ mustMatch: true });
      } else {
        p2.setErrors(null);
      }
    }
  }

  showInfo() {
    this.dialog.open(RegModalComponent, {
      width: '300px',
    })
  }
}
