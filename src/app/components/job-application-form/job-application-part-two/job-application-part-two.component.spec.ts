import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationPartTwoComponent } from './job-application-part-two.component';

describe('JobApplicationPartTwoComponent', () => {
  let component: JobApplicationPartTwoComponent;
  let fixture: ComponentFixture<JobApplicationPartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationPartTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationPartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
