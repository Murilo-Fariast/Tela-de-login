import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      senha: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/)
      ]],
      confirmarSenha: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/)]],
    }, {
      validators: [this.validadorPersonalizado]
    });
  }

  validadorPersonalizado: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;
    const email = formGroup.get('email')?.value;
    const confirmarEmail = formGroup.get('confirmarEmail')?.value;
    const telefone = formGroup.get('telefone')?.value;

    const errors: ValidationErrors = {};

    if (senha !== confirmarSenha) {
      errors['senhasDiferentes'] = true;
    }

    if (email !== confirmarEmail) {
      errors['emailsDiferentes'] = true;
    }

    if (senha && email && senha === email) {
      errors['senhaIgualEmail'] = true;
    }

    if (telefone && !/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(telefone)) {
      errors['telefoneInvalido'] = true;
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }

  erroNoForm(erro: string): boolean {
    return this.formulario.hasError(erro) && this.formulario.touched;
  }

  onSubmit() {
    if (this.formulario.valid) {
      alert('Formulário enviado com sucesso');
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
