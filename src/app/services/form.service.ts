import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  isInvalidAndTouchedOrDirty(control: AbstractControl) {
    return control.invalid && (control.touched || control.dirty);
  }
}
