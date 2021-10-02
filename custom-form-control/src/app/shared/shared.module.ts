import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { HexCodeInputComponent } from './components/hex-code-input/hex-code-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    InputComponent,
    FieldErrorsComponent,
    PasswordInputComponent,
    HexCodeInputComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    InputComponent,
    PasswordInputComponent,
    HexCodeInputComponent
  ]
})
export class SharedModule { }
