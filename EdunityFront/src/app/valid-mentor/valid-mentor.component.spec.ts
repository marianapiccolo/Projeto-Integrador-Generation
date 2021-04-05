import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidMentorComponent } from './valid-mentor.component';

describe('ValidMentorComponent', () => {
  let component: ValidMentorComponent;
  let fixture: ComponentFixture<ValidMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
