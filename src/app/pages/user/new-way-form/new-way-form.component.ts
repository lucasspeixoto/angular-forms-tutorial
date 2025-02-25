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

@Component({
  selector: 'app-new-way-form',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
  ],
  template: `
    <form nz-form [formGroup]="newUserForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="email"
          >E-mail</nz-form-label
        >
        <nz-form-control [nzSm]="14" [nzXs]="24">
          <input nz-input formControlName="email" id="email" />
          @if(newUserForm.get('email')?.hasError('required') &&
          newUserForm.get('email')?.dirty) {
          <span class="error-message">&#9888; Campo obrigatório!</span>
          } @if(newUserForm.get('email')?.hasError('email') &&
          newUserForm.get('email')?.dirty) {
          <span class="error-message">&#9888; E-mail inválido!</span>
          }
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
          @if(newUserForm.get('password')?.hasError('required') &&
          newUserForm.get('password')?.dirty) {
          <span class="error-message">&#9888; Campo obrigatório!</span>
          } @if(newUserForm.get('password')?.hasError('minlength') &&
          newUserForm.get('password')?.dirty) {
          <span class="error-message"
            >&#9888; Senha deve conter no mínimo 3 caracteres!</span
          >
          }
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
          @if(newUserForm.get('nickname')?.hasError('required') &&
          newUserForm.get('nickname')?.dirty) {
          <span class="error-message">&#9888; Campo obrigatório!</span>
          }
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
  private fb = inject(UntypedFormBuilder);

  public newUserForm = this.fb.group({
    email: this.fb.control('', [Validators.email, Validators.required]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    nickname: this.fb.control('', [Validators.required]),
    agree: this.fb.control(false),
  });

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
