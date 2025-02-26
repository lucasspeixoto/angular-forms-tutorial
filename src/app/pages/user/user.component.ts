import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
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
  template: `
    <nz-tabset #tabset>
      <nz-tab nzTitle="Formulário padrão">
        <app-old-way-form />
      </nz-tab>

      <nz-tab nzTitle="Formulário melhorado">
        <app-new-way-form />
      </nz-tab>
    </nz-tabset>
  `,
  styles: ``,
})
export class UserComponent {}
