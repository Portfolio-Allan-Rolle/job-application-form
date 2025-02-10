import { FormControl } from '@angular/forms';

export type Form = FormPartOne & FormPartTwo & FormPartThree;

export interface FormPartOne {
  civility: FormControl<string>;
  lastName: FormControl<string>;
  firstName: FormControl<string>;
  dateOfBirth: FormControl<string>;
  country: FormControl<string>;
  password: FormControl<string>;
  passwordConfirmation: FormControl<string>;
}

export interface FormPartTwo {
  job: FormControl<string>;
  contract: FormControl<string>;
  skills: FormControl<string>[];
}

export interface FormPartThree {
  comments: FormControl<string>;
}
