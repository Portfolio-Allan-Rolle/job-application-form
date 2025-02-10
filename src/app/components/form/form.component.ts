import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private formBuilder = inject(NonNullableFormBuilder);

  form = this.formBuilder.group({
    stepOne: this.formBuilder.group({
      civility: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    }),
    stepTwo: this.formBuilder.group({
      job: ['', Validators.required],
      contract: ['', Validators.required],
      skills: ['', Validators.required],
    }),
    stepThree: this.formBuilder.group({
      comments: ['', Validators.required],
    }),
  });

  get stepOne() {
    return this.form.controls['stepOne'].controls;
  }

  get stepTwo() {
    return this.form.controls['stepTwo'].controls;
  }

  get stepThree() {
    return this.form.controls['stepThree'].controls;
  }

  ngOnInit() {
    console.log(this.stepOne, this.stepTwo, this.stepThree);
  }
}
