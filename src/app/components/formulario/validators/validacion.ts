import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNotCode]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotCodeDirective), multi: true }
  ],
})
export class NotCodeDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (typeof value !== 'string' || value.trim().length === 0) {
      return null;
    }

    const codePattern = /(<\/?.+?>|\{|\}|\(|\)|\[|\]|;|=>|===|!==|function\b|const\b|let\b|var\b|class\b|import\b|export\b)/i;
    return codePattern.test(value) ? { notCode: true } : null;
  }
}
