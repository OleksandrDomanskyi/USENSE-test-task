import { Injectable } from '@angular/core';
import { PasswordValidator } from '../helpers/password-validator/password-validator';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  public checkStrength(password: string): number {
    return PasswordValidator.validate(password);
  }
}