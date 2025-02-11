import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationPartFourComponent } from './job-application-part-four.component';

describe('JobApplicationPartFourComponent', () => {
  let component: JobApplicationPartFourComponent;
  let fixture: ComponentFixture<JobApplicationPartFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationPartFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationPartFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
