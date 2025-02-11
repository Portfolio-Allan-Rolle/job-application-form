import { Component, inject } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  public breadcrumbService = inject(BreadcrumbService);
  stepOneStatus = this.breadcrumbService.stepOneStatus();
  stepTwoStatus = this.breadcrumbService.stepTwoStatus();
  stepThreeStatus = this.breadcrumbService.stepThreeStatus();
  stepFourStatus = this.breadcrumbService.stepFourStatus();
}
