import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { JobApplicationFormComponent } from './components/job-application-form/job-application-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, JobApplicationFormComponent, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  form = inject(FormService).form;
}
