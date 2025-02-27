import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { newUserForm } from '../constants/new-user-form';
import { CustomValidationMessagesComponent } from '../../../components/custom-validation-messages/custom-validation-messages.component';

@Component({
  selector: 'app-new-way-form',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    CustomValidationMessagesComponent,
  ],
  template: `
    <form nz-form [formGroup]="newUserForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="email"
          >E-mail</nz-form-label
        >
        <nz-form-control [nzSm]="14" [nzXs]="24">
          <input nz-input formControlName="email" id="email" />
          <app-custom-validation-messages controlName="email" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="password"
          >Senha</nz-form-label
        >
        <nz-form-control [nzSm]="14" [nzXs]="24">
          <input
            nz-input
            type="password"
            id="password"
            formControlName="password"
          />
          <app-custom-validation-messages
            controlName="password"
            [minLength]="3"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label
          [nzSm]="6"
          [nzXs]="24"
          nzFor="nickname"
          nzTooltipTitle="Como gostaria de ser chamado ?"
        >
          <span>Nome usuário</span>
        </nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24">
          <input nz-input id="nickname" formControlName="nickname" />
          <app-custom-validation-messages controlName="nickname" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <label nz-checkbox formControlName="agree">
            <span>
              Eu li e concordo com os
              <a>termos de serviço</a>
            </span>
          </label>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <button nz-button nzType="primary">Cadastrar</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
      [nz-form] {
        max-width: 600px;
      }

      .ant-select.ant-select-in-form-item.phone-select {
        width: 80px;
      }

      .register-area {
        margin-bottom: 8px;
      }

      .error-message {
        color: red;
        font-size: 14px;
        margin-top: 3px;
        display: flex;
        align-items: start;
      }
    `,
  ],
})
export class NewWayFormComponent {
  public newUserForm = newUserForm();

  public submitForm(): void {
    if (this.newUserForm.valid) {
      alert('Registrado!');
    } else {
      Object.values(this.newUserForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
