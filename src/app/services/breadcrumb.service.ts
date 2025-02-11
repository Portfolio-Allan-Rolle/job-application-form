import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  stepOneStatus = signal(false);
  stepTwoStatus = signal(false);
  stepThreeStatus = signal(false);
  stepFourStatus = signal(false);

  setStepOneStatus(status: boolean): void {
    this.stepOneStatus.set(status);
  }
  setStepTwoStatus(status: boolean): void {
    this.stepTwoStatus.set(status);
  }
  setStepThreeStatus(status: boolean): void {
    this.stepThreeStatus.set(status);
  }
  setStepFourStatus(status: boolean): void {
    this.stepFourStatus.set(status);
  }
}
