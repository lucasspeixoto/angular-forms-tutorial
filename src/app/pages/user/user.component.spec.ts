import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NewWayFormComponent } from './new-way-form/new-way-form.component';
import { OldWayFormComponent } from './old-way-form/old-way-form.component';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ActivatedRoute, Router } from '@angular/router';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserComponent,
        NzIconModule,
        NzTabsModule,
        OldWayFormComponent,
        NewWayFormComponent,
      ],
      providers: [
        provideAnimationsAsync(),
        provideAnimations(),
        provideNoopAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tab titles correctly', () => {
    const tabTitles =
      fixture.nativeElement.querySelectorAll('.ant-tabs-tab-btn');
    expect(tabTitles[0].textContent).toContain('Formulário padrão');
    expect(tabTitles[1].textContent).toContain('Formulário melhorado');
  });
});
