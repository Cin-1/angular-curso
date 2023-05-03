import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TestService } from '@modules/auth/services/test.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private authService: TestService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
          asyncValidators: this.authService.uniqueEmailValidator(),
          updateOn: 'blur',
        }),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        aboutMe: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  testLoaded(): void {
    const mockData = {
      email: 'test@test.com',
      name: 'Leifer',
      lastName: 'Mendez',
      phone: '55555555',
      aboutMe: 'Hola soy Angular developer',
    };

    this.registerForm.setValue(mockData);
  }

  testUploaded(): void {
    const mockData = {
      phone: '1-1111111',
    };

    this.registerForm.patchValue(mockData);
  }
}

function passwordMatchValidator(formCurrent: AbstractControl | FormGroup): any {
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return valuePassword === valuePasswordConfirm ? null : { mismatch: true };
}
