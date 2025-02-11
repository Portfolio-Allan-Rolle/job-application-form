import { Component } from '@angular/core';
import { JobApplicationPartOneComponent } from './job-application-part-one/job-application-part-one.component';

@Component({
  selector: 'app-job-application-form',
  imports: [JobApplicationPartOneComponent],
  templateUrl: './job-application-form.component.html',
  styleUrl: './job-application-form.component.scss',
})
export class JobApplicationFormComponent {}
