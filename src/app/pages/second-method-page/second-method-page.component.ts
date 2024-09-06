import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderComponent } from '../../components/shared/header/header.component';
import { NgModelFormComponent } from '../../components/forms/ng-model-form/ng-model-form.component';

@Component({
  selector: 'app-second-method-page',
  standalone: true,
  imports: [NgModelFormComponent, HeaderComponent],
  templateUrl: './second-method-page.component.html',
  styleUrl: './second-method-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondMethodPageComponent {

}
