import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationPartThreeComponent } from './job-application-part-three.component';

describe('JobApplicationPartThreeComponent', () => {
  let component: JobApplicationPartThreeComponent;
  let fixture: ComponentFixture<JobApplicationPartThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationPartThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationPartThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
