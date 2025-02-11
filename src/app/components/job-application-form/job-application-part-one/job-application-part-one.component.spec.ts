import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationPartOneComponent } from './job-application-part-one.component';

describe('JobApplicationPartOneComponent', () => {
  let component: JobApplicationPartOneComponent;
  let fixture: ComponentFixture<JobApplicationPartOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationPartOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationPartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
