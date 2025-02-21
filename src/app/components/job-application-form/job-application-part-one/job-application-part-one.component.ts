import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
  FormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-job-application-part-one',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './job-application-part-one.component.html',
  styleUrl: './job-application-part-one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobApplicationPartOneComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  formService = inject(FormService);

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
  });

  countries = [
    'Argentina',
    'Australia',
    'Brazil',
    'Canada',
    'China',
    'France',
    'Germany',
    'India',
    'Indonesia',
    'Italy',
    'Japan',
    'Mexico',
    'Russia',
    'Saudi Arabia',
    'South Africa',
    'South Korea',
    'Turkey',
    'United Kindgom',
  ];

  get stepOne() {
    return this.form.controls;
  }

  get stepOnePasswordForm() {
    return this.form.controls.passwordForm.controls;
  }

  ngOnInit() {
    console.log(this.form.controls.passwordForm.value);
  }

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.password === control.value.passwordConfirmation
      ? null
      : { PasswordNoMatch: true };
  }

  onFormSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
