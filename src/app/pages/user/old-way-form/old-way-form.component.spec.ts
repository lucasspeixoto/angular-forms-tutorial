import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OldWayFormComponent } from './old-way-form.component';

describe('OldWayFormComponent', () => {
  let component: OldWayFormComponent;
  let fixture: ComponentFixture<OldWayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldWayFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OldWayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
