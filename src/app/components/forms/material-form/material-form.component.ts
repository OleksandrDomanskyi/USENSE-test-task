import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PasswordStrengthService } from '../../../services/password-strength-service.service';
import { PasswordStrengthColors } from '../../../constants/password-strength-colors';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.scss'
})
export class MaterialFormComponent implements OnInit {
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
