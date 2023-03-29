import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  checkEqualityValidator,
  forbidenExtensionValidator,
} from '../services/auth.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css'],
})
export class PageSignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.maxLength(55)]],
        firstName: ['', [Validators.required, Validators.maxLength(55)]],
        
        
        immatriculation: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8),
            Validators.pattern(/^[0-9]{7}[a-zA-Z]$/),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.maxLength(255),
            Validators.email,
            // Custom validator with single parameter
            forbidenExtensionValidator('sncf.fr'),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(13),
          ],
        ],
        post: ['', [Validators.required, Validators.maxLength(55)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ],
        ],
        //confimation du mot de passe
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ],
        ],
      },
      {
        validators: checkEqualityValidator('password', 'confirmPassword'),
      }
    );
    
  }
  
  validate(): void {
    if (this.signUpForm.invalid) {
      Object.keys(this.signUpForm.controls).forEach((field) => {
        const control = this.signUpForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty();
          control.markAsTouched();
        } else if (control instanceof FormGroup) {
          this.validateFormGroup(control);
        }
      });
    } else {
      console.log(this.signUpForm.value);
      // envoyer le formulaire au serveur ou faire autre chose ici
    }
  }

  validateFormGroup(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty();
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateFormGroup(control);
      }
    });
  }
  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
