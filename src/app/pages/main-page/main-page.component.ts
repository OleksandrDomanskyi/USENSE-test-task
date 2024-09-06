import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HeaderComponent } from '../../components/shared/header/header.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
