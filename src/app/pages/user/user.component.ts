import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { OldWayFormComponent } from './old-way-form/old-way-form.component';
import { NewWayFormComponent } from './new-way-form/new-way-form.component';

@Component({
  selector: 'app-user',
  imports: [
    NzIconModule,
    NzTabsModule,
    OldWayFormComponent,
    NewWayFormComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}
