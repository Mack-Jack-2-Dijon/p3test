import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

    
}
// Custom validator with single parameter
    export function forbidenExtensionValidator(forbidenExtension: string): ValidatorFn {
      // Check if control value ends with extension given in parameter
      return function (control: AbstractControl): ValidationErrors | null {
        // Now tested with extension given as parameter
        const isValid = (control.value as string).endsWith(forbidenExtension);
  
        if (!isValid) {
          // 'extension' is the error key
          return {
            extension: { value: control.value, expected: forbidenExtension },
          };
        } else {
          return null;
        }
      };
    }

  //confimation du mot de passe
  export function checkEqualityValidator(
    password: string,
    confirmPassword: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Get first control value
      const value1 = control.get(password)?.value;
      // Get second control value
      const value2 = control.get(confirmPassword)?.value;

      if (!(value1 && value2 && value1 === value2)) {
        return { notEqual: { actual: value1, expected: value2 } };
      } else {
        return null;
      }
    };
  }    