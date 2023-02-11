import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static checkOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== '123') {
                    resolve({ checkOldPassword: true });
                }
                else resolve(null);
            }, 2000);
        });
    } 
  
    static checkPasswordEquality(control: FormGroup) : ValidationErrors | null {
        if ((control.controls['newPassword'].value as string) !== (control.controls['confirmPassword'].value as string)) 
            return { checkPasswordEquality: true }

        return null;
    }
}