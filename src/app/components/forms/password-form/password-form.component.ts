import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { PasswordStrengthService } from '../../../services/password-strength-service.service';
import { PasswordStrengthColors } from '../../../constants/password-strength-colors';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordFormComponent implements OnInit {

  public passwordForm!: FormGroup;
  public strength: number = 0;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly passwordStrengthService: PasswordStrengthService
  ) {}

  public get password(): FormControl {
    return this.passwordForm.get('password') as FormControl;
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.subscribeToPasswordChanges();
  }

  public getBarColor(index: number): string {
    const passwordLength = this.password.value.length;
    
    if (passwordLength === 0) {
      return PasswordStrengthColors[0];
    }

    if (passwordLength < 8) {
      return PasswordStrengthColors[1];
    }

    return this.strength > index ? PasswordStrengthColors[this.strength] : PasswordStrengthColors[0];
  }

  private initializeForm(): void {
    this.passwordForm = this.formBuilder.group({
      password: [''],
    });
  }

  private subscribeToPasswordChanges(): void {
    this.password.valueChanges.subscribe((password: string) => {
      this.strength = this.passwordStrengthService.checkStrength(password);
    });
  }
}
