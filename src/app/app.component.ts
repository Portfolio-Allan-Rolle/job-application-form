import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent, BreadcrumbsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
