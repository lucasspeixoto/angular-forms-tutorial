import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWayFormComponent } from './new-way-form.component';

describe('NewWayFormComponent', () => {
  let component: NewWayFormComponent;
  let fixture: ComponentFixture<NewWayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewWayFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
