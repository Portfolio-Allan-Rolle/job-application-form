import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
  FormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-job-application-part-one',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
  ],
  templateUrl: './job-application-part-one.component.html',
  styleUrl: './job-application-part-one.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobApplicationPartOneComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  civility = '';
  lastName = '';
  country = '';

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
    console.log(this.form.controls.passwordForm.controls);
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
