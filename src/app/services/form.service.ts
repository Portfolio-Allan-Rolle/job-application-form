import { inject, Injectable } from '@angular/core';
import {
  NonNullableFormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formBuilder = inject(NonNullableFormBuilder);
  form = this.formBuilder.group({
    civility: ['', Validators.required],
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    country: ['', Validators.required],
    passwordForm: this.formBuilder.group(
      {
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required],
      },
      {
        validators: this.confirmPasswordValidator,
      },
    ),
    job: ['', Validators.required],
    contracts: this.formBuilder.array([], Validators.required),
    skills: this.formBuilder.array([], Validators.required),
    comments: [''],
  });

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.password === control.value.passwordConfirmation
      ? null
      : { PasswordNoMatch: true };
  }

  isInvalidAndTouchedOrDirty(control: AbstractControl) {
    return control.invalid && (control.touched || control.dirty);
  }
}
