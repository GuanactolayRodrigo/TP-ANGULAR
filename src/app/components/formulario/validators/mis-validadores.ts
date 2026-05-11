import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMisValidadores]',
})
export class MisValidadores {
  constructor() {}

  static validarCurso(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value || typeof value !== 'string') return null;

    const errors: ValidationErrors = {};

    // Verificar que la primera letra sea mayúscula
    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
      errors['primeraLetraMayuscula'] = true;
    }

    // Verificar que tenga más de dos caracteres
    if (value.length <= 2) {
      errors['masDeDosCaracteres'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  }
}
