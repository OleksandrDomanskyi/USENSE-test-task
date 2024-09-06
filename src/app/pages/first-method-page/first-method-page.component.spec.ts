import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMethodPageComponent } from './first-method-page.component';

describe('FirstMethodPageComponent', () => {
  let component: FirstMethodPageComponent;
  let fixture: ComponentFixture<FirstMethodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstMethodPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
