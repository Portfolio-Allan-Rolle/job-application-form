import { FormControl, FormGroup } from '@angular/forms';

export type Form = IFormPartOne & IFormPartTwo & IFormPartThree;

export interface IFormPartOne {
  civility: string;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  country: string;
  passwordForm: passwordForm;
}

interface passwordForm {
  password: string;
  passwordConfirmation: string;
}

export interface IFormPartTwo {
  job: string;
  contracts: string[];
  skills: string[];
}

export interface IFormPartThree {
  comments: string;
}
