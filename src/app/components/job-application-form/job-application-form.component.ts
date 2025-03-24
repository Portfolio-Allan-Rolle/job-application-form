import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormService } from '../../services/form.service';
import { TrimDirective } from '../../../directives/trim.directive';

@Component({
  selector: 'app-job-application-form',
  imports: [ReactiveFormsModule, FormsModule, TrimDirective],
  templateUrl: './job-application-form.component.html',
  styleUrl: './job-application-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobApplicationFormComponent {
  formService = inject(FormService);
  form = input.required<FormGroup>();
  isFormSubmitted = signal(false);

  countries = ['Spain', 'France', 'Italy', 'USA', 'Portugal'];
  contractsTypes = ['CDI', 'CDD', 'Freelance'];
  skill = '';
  skillsCount = signal(0);
  skillMaximum = computed(() => this.skillsCount() === 5);

  getFormControl(control: string): AbstractControl {
    return this.form().get(control) as AbstractControl;
  }

  getPasswordFormControl(control: string): AbstractControl {
    return this.form().get('passwordForm')?.get(control) as AbstractControl;
  }

  get contracts() {
    return this.form().get('contracts') as FormArray;
  }

  get skills() {
    return this.form().get('skills') as FormArray;
  }

  onSelectingContract($event: any) {
    const checkedValue = $event.target.value;
    const checked = $event.target.checked;
    const checkedArray = this.form().get('contracts') as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      let i = 0;
      checkedArray.controls.forEach((item) => {
        if (item.value == checkedValue) {
          checkedArray.removeAt(i);
        }
        i++;
      });
    }
  }

  onAddSkill(): void {
    if (this.skill.length === 0) return;
    if (this.skillMaximum()) return;
    this.skills.push(new FormControl(this.skill));
    this.skillsCount.set(this.skills.length);
    this.skill = '';
  }

  onRemoveSkill(skill: string) {
    const currentSkill = skill;
    const skillsArray = this.form().get('skills') as FormArray;

    if (skill) {
      let i = 0;
      skillsArray.controls.forEach((skill) => {
        if (skill.value == currentSkill) {
          skillsArray.removeAt(i);
        }
        i++;
        this.skillsCount.set(this.skills.length);
      });
    }
  }

  onFormSubmit() {
    this.form().markAllAsTouched();
    if (this.form().valid) {
      this.isFormSubmitted.set(true);
    }
  }

  resetForm() {
    const controls = this.form().controls;
    const keys = Object.keys(this.form().value);
    keys.forEach((field: string) => {
      if (controls[field] instanceof FormArray) {
        controls[field].clear();
        controls[field].markAsUntouched();
      } else {
        controls[field].reset();
      }
    });
    this.isFormSubmitted.set(false);
  }
}
