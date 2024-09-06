import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderComponent } from '../../components/shared/header/header.component';
import { PasswordFormComponent } from '../../components/forms/password-form/password-form.component';

@Component({
  selector: 'app-first-method-page',
  standalone: true,
  imports: [PasswordFormComponent, HeaderComponent],
  templateUrl: './first-method-page.component.html',
  styleUrl: './first-method-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstMethodPageComponent {

}
