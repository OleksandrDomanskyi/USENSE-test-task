import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { PasswordStrengthService } from '../../../services/password-strength-service.service';
import { PasswordStrengthColors } from '../../../constants/password-strength-colors';

@Component({
  selector: 'app-ng-model-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model-form.component.html',
  styleUrl: './ng-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgModelFormComponent {
  public password: string = '';
  public strength: number = 0;

  constructor(
    private readonly passwordStrengthService: PasswordStrengthService
  ) {}

  public getBarColor(index: number): string {
    const passwordLength = this.password.length;
    
    if (passwordLength === 0) {
      return PasswordStrengthColors[0];
    }

    if (passwordLength < 8) {
      return PasswordStrengthColors[1];
    }

    return this.strength > index ? PasswordStrengthColors[this.strength] : PasswordStrengthColors[0];
  }

  public onPasswordChange(password: string): void {
    this.strength = this.passwordStrengthService.checkStrength(password);
  }
}
