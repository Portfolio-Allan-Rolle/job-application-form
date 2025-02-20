import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { JobApplicationFormComponent } from './components/job-application-form/job-application-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    JobApplicationFormComponent,
    BreadcrumbsComponent,
    NgbModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
