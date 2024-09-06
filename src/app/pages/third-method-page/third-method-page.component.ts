import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderComponent } from '../../components/shared/header/header.component';
import { MaterialFormComponent } from '../../components/forms/material-form/material-form.component';

@Component({
  selector: 'app-third-method-page',
  standalone: true,
  imports: [HeaderComponent, MaterialFormComponent],
  templateUrl: './third-method-page.component.html',
  styleUrl: './third-method-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdMethodPageComponent {

}
